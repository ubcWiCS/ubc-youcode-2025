"use client";
import Image from "next/image";
import bgDesktop from "@/app/assets/recap_bg.svg";
import bgMobile from "@/app/assets/recap_bg_mobile.svg";

const Recap = () => {
  return (
    <section
      id="recap"
      className="relative w-full bg-[var(--background-color)]"
    >
      {/* Mobile Background */}
      <Image
        src={bgMobile}
        alt="Recap Background"
        className="w-full h-auto -mt-16 block md:hidden"
        priority
      />

      {/* Desktop Background */}
      <Image
        src={bgDesktop}
        alt="Recap Background"
        className="w-full h-auto -mt-24 hidden md:block"
        priority
      />

      {/* Text (hidden on mobile) */}
      <div
        className="
          hidden md:block
          absolute
          top-1/2 left-1/2
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
