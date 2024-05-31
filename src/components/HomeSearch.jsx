"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <div className="flex items-center pl-2 space-x-2 ">
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] bg-zinc-800 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl bg-zinc-800 mr-3" />
        <input
          type="text"
          className="flex-grow bg-zinc-800 focus:outline-none lg:pr-80"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search the web"
        />
       
      </form>

      <Link href="https://copilot.xanmoy.me" replace>
        <div className="flex items-center space-x-1 m-1 mt-6 rounded-full bg-zinc-800">
          <div className="rounded-full bg-zinc-800 p-2 h-18 w-18">
            <Image
              width="50"
              height="50"
              src="/copilot.svg"
              alt="AI Logo"

            />
          </div>
          
          
        </div>
      </Link>
    
    </div>
  );
}
