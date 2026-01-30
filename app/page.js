"use client";

import PetalScene from "@/components/NewPetalScene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center text-center overflow-hidden">
      <PetalScene />
      <Footer />
    </main>
  );
}
