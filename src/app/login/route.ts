import { Role } from "@/types/shared";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams, host, protocol } = new URL(req.nextUrl);
  const role = searchParams.get("role");
  const url = new URL(`${protocol}//${host}`)
  if (role === 'broker') {
    url.pathname = `register/${Role.broker}`
    return NextResponse.redirect(url);
  }
  url.pathname = `register/${Role.client}`
  return NextResponse.redirect(url);
}