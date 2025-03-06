import Register from "@/components/Register";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col items-center justify-center">
      <Image
        src="/assets/logowithtext.png"
        alt="YouCode Logo"
        width={700} // Set your desired width
        height={700} // Set your desired height
        className="w-auto h-auto max-w-sm lg:max-w-lg" // Optional: Tailwind classes
      />
      <Register />
    </div>
  );
};

export default Hero;