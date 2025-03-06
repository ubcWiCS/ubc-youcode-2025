import Register from "@/components/Register";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col items-center justify-center w-full">
      <div className="w-full  px-4"> {/* Adjust max-width as needed */}
        <Image
          src="/assets/logowithtext.png"
          alt="YouCode Logo"
          width={700} // Increase width
          height={700} // Increase height
          className="w-3/4 mx-auto h-auto" // Make the image responsive
          priority // Optional: Prioritize loading this image
        />
      </div>
      <Register />
    </div>
  );
};

export default Hero;