"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useAppendixState } from "@/store/appendix-store";
import { Coverage } from "@/types/coverage";
import { CheckCircle, Eraser, EraserIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  label: string;
  side: "left" | "right";
}

type ApiRepsonse = {
  data: Coverage[];
  message?: string;
};

export default function SearchTextField({ label, side }: Props) {
  const debounceDelay = 500;
  const [text, setText] = useState<string>("");
  const [searched, setSearched] = useState<Coverage[]>([]);
  const {
    currentCoverages: coverages,
    setCurrentLeft,
    setCurrentRight,
  } = useAppendixState();

  useEffect(() => {
    if (!text) {
      setSearched([]);
      return;
    }
    const handler = setTimeout(async () => {
      const res = await fetch(
        `/api/appendix?query=${encodeURIComponent(text)}`
      );
      if (!res.ok) return;
      const json: ApiRepsonse = await res.json();
      setSearched(
        json.data.filter((c) => {
          return !(side === "left" ? coverages.left : coverages.right).includes(
            c
          );
        })
      );
      console.debug(json.data);
    }, debounceDelay);
    return () => clearTimeout(handler);
  }, [text]);

  const handleClear = () => setText("");

  const handleSelect = (c: Coverage) => () => {
    if (side === "left") {
      setCurrentLeft([...new Set([...coverages.left, c])]);
    } else {
      setCurrentRight([...new Set([...coverages.right, c])]);
    }
    handleClear();
  };

  const handleUnSelect = (c: Coverage) => () => {
    if (side === "left") {
      setCurrentLeft(coverages.left.filter((l) => l.code !== c.code));
    } else {
      setCurrentRight(coverages.right.filter((r) => r.code !== c.code));
    }
  };

  return (
    <div className="px-2">
      <label>{label}</label>
      <div className="flex items-center">
        <Input
          placeholder="담보명을 입력해주세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <ul className="max-h-[200px] overflow-y-scroll flex flex-col gap-y-1 mt-2">
        {searched &&
          searched.map((c) => (
            <li
              onClick={handleSelect(c)}
              key={c.code}
              className="text-slate-600 hover:text-sky-600 text-sm cursor-pointer"
            >{`(${c.code}) ${c.name}`}</li>
          ))}
      </ul>

      <Separator className="my-2" />

      <ul className="flex flex-col gap-y-1 px-2">
        {(side === "left" ? coverages.left : coverages.right) &&
          (side === "left" ? coverages.left : coverages.right).map((c) => (
            <li key={c.code} className="flex justify-between w-full">
              <label className="text-sm font-semibold">{`(${c.code}) ${c.name}`}</label>
              <EraserIcon
                onClick={handleUnSelect(c)}
                className="cursor-pointer"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
