import { NextResponse } from "next/server";

export async function POST(request) {
  const { password } = await request.json();

  if (password === "PeekInside") {
    const response = NextResponse.json({ success: true });

    response.cookies.set("portfolio_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}