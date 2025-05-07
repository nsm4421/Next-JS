import Image from "next/image";
import SearchTextField from "./search-text-field";
import { Separator } from "@/components/ui/separator";
import { DisplayCoverages } from "./display-coverages";
import AddCoverageButton from "./add-coverage-button";

// 사업방법서 별지
export default function AppendixPage() {
  return (
    <>
      <section>
        <h1 className="mb-3 text-xl">별지 가입조건</h1>
        <ul className="flex flex-col gap-y-2">
          <li className="px-3 py-2 flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <p className="text-sm text-slate-500">
                아래와 같이 별지上 동시가입조건 관련사항을 기재해야 하는 경우
              </p>
              <Image
                src={"/appendix/appendix-1.png"}
                alt={"동시가입"}
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="my-2 flex flex-col gap-y-1">
              <div className="flex justify-between">
                <p className="text-sm text-slate-500">입력양식</p>
                <AddCoverageButton />
              </div>
              <div className="grid grid-cols-[1fr_10px_1fr] w-full">
                <SearchTextField side="left" label={"(左)"} />
                <Separator orientation="vertical" />
                <SearchTextField side="right" label={"(右)"} />
              </div>
            </div>
          </li>
        </ul>

        <div className="mx-2 my-1 flex flex-col gap-y-2 px-2">
          <p className="text-sm text-slate-500">출력결과</p>
          <p>
            아래의 각 A그룹단위별 보장특약 중 하나의 특약과 B보장특약 중 하나의
            특약은 동시에 가입해야 함.
          </p>
          <DisplayCoverages />
        </div>
      </section>
    </>
  );
}
