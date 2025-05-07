import { Button } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <div className="flex h-full">
      <div className="mx-auto my-auto flex flex-col min-w-1/2">
        <div className="flex flex-col gap-y-2 mb-8">
          <h1 className="text-3xl font-bold">SOL V2.0</h1>
          <h2 className="text-xl font-semibold">디자인 시안</h2>
        </div>

        <ol className="flex flex-col gap-y-2 w-2xs px-2">
          <li className="flex gap-x-2 justify-between">
            <label className="text-lg">사업방법서 별지</label>
            <Button className="cursor-pointer hover:text-sky-600">
              <a href="/appendix">→</a>
            </Button>
          </li>

          <li className="flex gap-x-2 justify-between">
            <label className="text-lg">약관</label>
            <Button className="cursor-pointer hover:text-sky-600">
              <a href="/terms">→</a>
            </Button>
          </li>
        </ol>
      </div>
    </div>
  );
}
