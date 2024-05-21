import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}

      <div className="flex flex-col items-center mt-24">
        {/* <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        /> */}
        <h1 className="lg:text-8xl font-bold	text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">FindIt</h1>

        <HomeSearch />
      </div>
    </>
  );
}
