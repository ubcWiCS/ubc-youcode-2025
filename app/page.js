"use client";

import PetalScene from "@/components/NewPetalScene";
import Recap from "@/components/Recap";
import FAQ from "@/components/faq";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center text-center overflow-hidden">
      <PetalScene />
      <Recap />
      <FAQ />
      <Sponsor />
      <Footer />
    </main>
  );
}
