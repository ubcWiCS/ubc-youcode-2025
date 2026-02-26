"use client";
import Image from "next/image";
import bg from "@/app/assets/recap_bg.svg";

const Recap = () => {
  return (
    <section
      id="recap"
      className="relative w-full bg-[var(--background-color)]"
    >
      <Image
        src={bg}
        alt="Beach Background"
        className="w-full h-auto -mt-24"
        priority
      />
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-[130%] -translate-y-[250%] 
          md:-translate-x-[140%] md:-translate-y-[230%]
          lg:-translate-x-[158%] lg:-translate-y-[260%]
          p-2 sm:p-4
        "
      >
        <h2
          className="
            text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-dm italic
            text-[#145174]
            leading-tight
            whitespace-nowrap
          "
        >
          Recap 2025
        </h2>
      </div>
    </section>
  );
};

export default Recap;
