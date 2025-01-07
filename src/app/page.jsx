import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import About from "@/components/About"; // Import the 'About' component
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center lg:mt-24 mt-18">
        <Image width={300} height={100} src="/logo.svg" alt="xeoly Logo" />
        <HomeSearch />

        <p className="text-zinc-300 p-5">Privacy, simplified.</p>

        <div className="w-full px-4 py-10 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-zinc-800 text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">
              Introducing New Sage AI
            </h2>
            <p className="text-gray-400 mb-6">
              Enhance your productivity with the new Xeloy Copilot. Get
              assistance in your daily tasks effortlessly.
            </p>
            <a
              href="https://sage.xanmoy.in"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Ask Sage
            </a>
          </div>
        </div>

        {/* Explore Features Button */}
        <a
          href="#features"
          className="border border-white text-white text-center justify-center items-center font-bold py-2.5 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex"
        >
          Explore our features
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-downr ml-1"
          >
            <path d="M8 18L12 22L16 18" />
            <path d="M12 2V22" />
          </svg>
        </a>

        {/* About Component */}
        <About />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
