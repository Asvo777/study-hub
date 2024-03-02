import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  cookies().delete("currentUser");

  return NextResponse.json({ status: 200 });
}
