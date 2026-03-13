import { NextRequest, NextResponse } from "next/server";
import { fetchCourses, filterCoursesByMonth, getMonthNumber } from "@/app/lib/api/courses";

export async function GET(request: NextRequest) {
  const month = request.nextUrl.searchParams.get("month");

  const courses = await fetchCourses();

  if (month) {
    const monthNum = getMonthNumber(month) ?? parseInt(month, 10);
    if (monthNum && monthNum >= 1 && monthNum <= 12) {
      const filtered = filterCoursesByMonth(courses, monthNum);
      return NextResponse.json(filtered);
    }
  }

  return NextResponse.json(courses);
}
