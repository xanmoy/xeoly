import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
// import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}

      <div className="flex flex-col items-center lg:mt-24 mt-18">
        <Image
          width="300"
          height="100"
          src="/logo.svg"
          alt="xeoly Logo"
        />
        {/* <h1 className="lg:text-8xl font-bold	text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">FindIT</h1> */}

        <HomeSearch />
        {/* <Carousel/> */}
      </div>
    </>
  );
}
