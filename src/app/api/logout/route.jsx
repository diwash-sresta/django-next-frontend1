import { NextResponse } from "next/server";
import { deleteTokens } from "../../lib/auth";

export async function POST(request){
  deleteTokens()
  return NextResponse.json({},{status: 200})
}