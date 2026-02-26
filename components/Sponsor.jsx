"use client";
import Image from "next/image";
import bg from "@/app/assets/sponsor_bg.svg";

const Sponsor = () => {
  return (
    <section id="sponsors" className="relative w-full bg-[#A1D4F2] -mb-2">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        {/* <h2 className="text-[var(--blue-dark)] font-dm italic text-3xl sm:text-4xl md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
          Our 2026 Sponsors
        </h2> */}
      </div>

      {/* Background image */}
      <Image src={bg} alt="Background" className="w-full h-auto" priority />
    </section>
  );
};

export default Sponsor;
