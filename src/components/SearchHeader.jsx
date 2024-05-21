import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className=" top-0">
      <div className="container flex flex-wrap w-full p-4 items-center justify-between">
        <div className="item text-center lg:text-center lg:w-1 py-3 flex-grow">
          <Link href={"/"}>
            <h1 className="lg:text-4xl font-bold	pl-0 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">SearchX</h1>

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
