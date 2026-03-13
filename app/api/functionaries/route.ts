import { NextResponse } from "next/server";
import { fetchVorstandMembers } from "@/app/lib/api/functionaries";

export async function GET() {
  const members = await fetchVorstandMembers();
  return NextResponse.json(members);
}
