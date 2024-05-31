import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center lg:mt-24 mt-18">
        <Image
          width="300"
          height="100"
          src="/logo.svg"
          alt="xeoly Logo"
        />
        <HomeSearch />

        <div className="w-full px-4 py-5 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-zinc-800 text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Introducing New Xeloy Copilot</h2>
            <p className="text-gray-400 mb-6">
              Enhance your productivity with the new Xeloy Copilot. Get assistance in your daily tasks effortlessly.
            </p>
            <a href="https://copilot.xanmoy.me" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Ask Copilot
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
