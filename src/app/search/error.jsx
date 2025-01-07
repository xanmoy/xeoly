"use client";
import Link from 'next/link'
import Image from 'next/image'

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    // <div className="flex flex-col justify-center items-center pt-10">
      
    //   <h1 className="text-3xl mb-4">Something went wrong</h1>
    //   {/* <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="24"
    //     height="24"
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     stroke="currentColor"
    //     stroke-width="2"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //     className="lucide lucide-frown"
    //   >
    //     <circle cx="12" cy="12" r="10" />
    //     <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    //     <line x1="9" x2="9.01" y1="9" y2="9" />
    //     <line x1="15" x2="15.01" y1="9" y2="9" />
    //   </svg> */}
    //   <button className="text-blue-500 text-center" onClick={() => reset()}>
    //     Try again
    //   </button>
    // </div>
    <div className="text-center flex flex-col items-center justify-center">
      <div>
        <Image src="/robot.svg" alt="404" width={100} height={100} className='pb-4' />
      </div>

      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      {/* <Link href="/" className="text-black/[0.7]  hover:underline">
        Go back to the homepage
      </Link> */}
      <Link className="text-blue-500 text-center" onClick={() => reset()}>
        Go back to the homepage
      </Link>
    </div>
  );
}
