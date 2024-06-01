import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
import Image from "next/image";

export default function SearchHeader() {
  return (
    <header className="w-full lg:bg-gradient-to-b from-indigo-600 to-zinc-900">
      <div className="container flex flex-wrap w-full items-center justify-between">
        <div className="flex-grow lg:flex-grow-0 w-max text-center lg:text-left">
          {/* Conditional rendering of the gradient background */}
          <div className="bg-gradient-to-b from-indigo-800 to-zinc-900 lg:bg-transparent md:bg-transparent">
            <Link href={"/"} className="inline-block">
              <Image
                width="150"
                height="40"
                src="/logo.svg"
                alt="XEOLY Logo"
                className="mx-auto lg:mx-0"
              />
            </Link>
          </div>
        </div>

        <div className="item my-2 flex-grow">
          <SearchBox />
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
