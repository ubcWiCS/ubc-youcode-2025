"use client";
import Image from "next/image";
import bg from "@/app/assets/sponsor_bg.svg";

// TODO add content + fix the bg image size
const Sponsor = () => {
  return (
    <section id="sponsors" className="w-full bg-[#A1D4F2] -translate-y-[30%] md:-translate-y-[58%]">
      <Image
        src={bg}
        alt="Background"
        className="w-full h-auto"
        priority
      />
    </section>
  );
};

export default Sponsor;
