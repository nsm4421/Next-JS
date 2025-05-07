import { NextResponse } from "next/server";

type ResponseType<T> = {
  data?: T;
};

export type ApiResponseType<T> = Promise<NextResponse<ResponseType<T>>>;

interface Props<T> {
  data?: T;
  message?: string;
  status: number;
}

export function genApiResponse<T>({ data, message, status }: Props<T>) {
  return NextResponse.json({ data, message }, { status });
}
