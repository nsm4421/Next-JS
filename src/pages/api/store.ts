import { StoreType } from "@/constant/interface";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreType[]>,
) {
  // TODO : get index from request paran
  const startIndex = 1
  const endIndex = 100
  const endPoint = `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_DATA_PORTAL_API_KEY}/json/CrtfcUpsoInfo/${startIndex}/${endIndex}`
  const data = await fetch(endPoint).then(res => res.json()).then(json => json.CrtfcUpsoInfo.row as StoreType[])
  return res.status(200).json(data)
}
