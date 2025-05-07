"use client";

import { useAppendixState } from "@/store/appendix-store";
import { PlusCircle } from "lucide-react";

export default function AddCoverageButton() {
  const {
    setCoverages,
    coverages,
    currentCoverages,
    setCurrentLeft,
    setCurrentRight,
  } = useAppendixState();

  const handleAdd = () => {
    setCoverages([...coverages, currentCoverages]);
    setCurrentLeft([]);
    setCurrentRight([]);
  };
  return (
    <PlusCircle
      className="text-sky-500 hover:text-sky-700 cursor-pointer"
      onClick={handleAdd}
    />
  );
}
