import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0">
      <div className="flex w-full py-6 items-center justify-between">
        <Link href={"/"}>
          <h1 className="lg:text-4xl font-bold	pl-4 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">SearchX</h1>

        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        {/* <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button> */}
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
