"use client";
import Image from "next/image";
import bg from "@/app/assets/recap_bg.svg";

// TODO
const Recap = () => {
  return (
    <section id="recap" className="w-full -translate-y-[16%] md:-translate-y-[5%]">
      <Image
        src={bg}
        alt="Beach Background"
        className="w-full h-auto"
        priority
      />
    </section>
  );
};

export default Recap;
