import { mockCoverages } from "@/constant/mock-coverages";
import { genApiResponse } from "@/lib/api-response";
import { Coverage } from "@/types/coverage";
import { NextRequest } from "next/server";

async function callRemoteApi(query: string): Promise<Coverage[]> {
  return mockCoverages.filter((c) => c.name.includes(query));
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (!query) {
    console.error("query is not given");
    return genApiResponse<Coverage[]>({
      message: "query not given",
      status: 403,
    });
  }

  try {
    const data: Coverage[] = await callRemoteApi(query);

    return genApiResponse<Coverage[]>({
      data,
      message: `got ${data.length} data`,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return genApiResponse<Coverage[]>({
      message: "internal server error",
      status: 500,
    });
  }
}
