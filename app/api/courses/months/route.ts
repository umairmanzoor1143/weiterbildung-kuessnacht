import { NextResponse } from "next/server";
import { fetchAvailableMonths } from "@/app/lib/api/courses";

export async function GET() {
  const months = await fetchAvailableMonths();
  return NextResponse.json(months);
}
