import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  let data;
  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
    );

    if (!response.ok) {
      console.error('Fetch error:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    data = await response.json();

  } catch (error) {
    console.error('Something went wrong:', error);
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Something went wrong</h1>
        <p className="text-lg">
          Please try again later or go back to the homepage{" "}
          <Link href="/" className="text-indigo-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-indigo-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <WebSearchResults results={data} />}</>;
}
