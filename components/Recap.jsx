"use client";
import Image from "next/image";
import bg from "@/app/assets/recap_bg.svg";

// TODO
const Recap = () => {
  return (
    <section className="w-full translate-y-[-2%]">
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
