"use client"
import Image from "next/image";
import { AiOutlineCamera, AiOutlineSearch, CiVideoOn } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from 'next/link'

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  function selectTab(tab) {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }
  return (
    <div className="flex space-x-2 select-none  w-full justify-center lg:justify-start lg:pl-52 text-zinc-700 text-sm">
      <div onClick={()=>selectTab("All")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-indigo-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-indigo-600 !border-indigo-600"}`}>
        <AiOutlineSearch className="text-md"/>
        <p>All</p>
      </div>
      <div onClick={()=>selectTab("Images")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-indigo-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-indigo-600 !border-indigo-600"}`}>
        <AiOutlineCamera className="text-md"/>
        <p className="text-zinc-400">Images</p>
      </div>
      
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-indigo-500 cursor-pointer pb-3 ${pathname === "/search/ai" && "!text-indigo-600 !border-indigo-600"}`}>
        <Link href="https://sage.xanmoy.in" replace>
          <div className="flex items-center space-x-1">
            <Image
              width="20"
              height="20"
              src="/copilot.svg"
              alt="AI Logo"
            />
            <span className="font-bold text-zinc-400">
             Ask Sage
            </span>
          </div>
        </Link>
      </div>

    </div>
  )
}