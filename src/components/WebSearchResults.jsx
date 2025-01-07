import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";
import Image from "next/image";
export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-300 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <div className="flex items-center space-x-2">
          
              <img
                src={result.pagemap?.cse_image?.[0]?.src || "/no-image.svg"}
                alt={result.title}
                height={15}
                width={15}
                className="group-hover:shadow-xl rounded-full"
              />

           
              <Link className="text-sm truncate inline-block" href={result.link}>
              {result.formattedUrl}
              </Link>
            </div>
            <Link
              className="group-hover:underline decoration-blue-700 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-200">{Parser(result.htmlSnippet || "")}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
