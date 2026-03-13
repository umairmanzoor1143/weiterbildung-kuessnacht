import { NextRequest, NextResponse } from "next/server";
import { fetchAllCompanies, filterCompaniesBySlug } from "@/app/lib/api/members";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  const companies = await fetchAllCompanies();

  if (slug) {
    const filtered = filterCompaniesBySlug(companies, slug);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(companies);
}
