import { NextResponse } from "next/server";

export type JsonBuilderResponse<TData = unknown, TMetadata = unknown> = {
  message: string;
  data: TData;
  metadata?: TMetadata;
};

export const jsonBuilder = <TData = unknown, TMetadata = unknown>(
  response: JsonBuilderResponse<TData, TMetadata>,
  init?: ResponseInit
) => {
  return NextResponse.json(response, init);
};
