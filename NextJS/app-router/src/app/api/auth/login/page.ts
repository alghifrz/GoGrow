import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  return NextResponse.json(
    {
      message: "Hello World",
      data: req,
    },
    {
      status: 200,
    }
  );
}
