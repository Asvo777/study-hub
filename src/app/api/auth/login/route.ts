import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const response = NextResponse.json({ message: "wow!" }, { status: 200 });

  response.cookies.set({
    name: "currentUser",
    value: "abc@gmail.com",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
