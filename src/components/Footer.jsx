import CountryLookup from "./CountryLookup";
import Image from "next/image";
export default function Footer() {
  return (


    <footer className="bg-gradient-to-b from-indigo-800 to-indigo-900 w-full h-fit shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center justify-center items-center text-center">
          {/* <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            
            <Image width="150" height="80" src="/logo.svg" alt="xeoly Logo" />

            
          </a> */}
          
          <ul className="flex pt-5 flex-wrap text-center justify-center gap-5 lg:gap-24 items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="#" className="hover:underline text-center me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-b border-zinc-500 sm:mx-auto lg:my-8" />
        <span className="block text-sm justify-center text-gray-400 text-center ">© 2024 <a href="/" className="hover:underline">Ganguly Enterprises</a>. All Rights Reserved.</span>
      </div>
    </footer>


  );
}
