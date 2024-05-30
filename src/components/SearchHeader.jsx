import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
import Image from "next/image";

export default function SearchHeader() {
  return (
    <header className="bg-zinc-900 top-0">
      <div className="container flex flex-wrap w-full p-1 items-center justify-between">
        <div className="flex-grow lg:flex-grow-0 text-center lg:text-left">
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

        <div className="item my-2 flex-grow">
          <SearchBox />
        </div>

      </div>
      <SearchHeaderOptions />
    </header>
  );
}
