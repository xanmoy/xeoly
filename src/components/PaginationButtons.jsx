"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            {/* <BsChevronLeft className="h-5" />
            <p>Previous</p> */}
            <button class="bg-indigo-700 hover:bg-indigo-800 text-indigo-950 font-bold py-2 px-4 rounded-l">
              Prev
            </button>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            {/* <BsChevronRight className="h-5" /> */}
            {/* <span>More Results</span> */}
            <button class="bg-indigo-700 hover:bg-indigo-800 text-indigo-950 font-bold py-2 px-4 rounded-r">
              Next
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
