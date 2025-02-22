import React from "react";
import Image from "next/image";

import arcteryx from "../public/assets/sponsors/arcteryx.png"

const Sponsors = () => {
  // Sample sponsor data (replace with actual sponsor logos)
  const platinumSponsors = [
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
  ];

  const goldSponsors = [
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
  ];

  const silverSponsors = [
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
    { src: arcteryx, alt: "arcteryz logo" },
  ];

  return (
    <div className="flex flex-col items-center mt-16 lg:mt-32 bg-gray-200 bg-opacity-80 p-10 rounded-3xl  ml-8 mr-8 md:m-64" id="sponsors">
      <h2 className='text-[#9A348E] text-4xl md:text-6xl lg:text-7xl font-bold m-8'>
        Our Sponsors
      </h2>

      <div className="flex flex-wrap justify-center gap-8 w-full mb-12">
        {platinumSponsors.map((sponsor, index) => (
          <div key={index} className="w-40 md:w-60 lg:w-72">
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
        {goldSponsors.map((sponsor, index) => (
          <div key={index} className="w-32 md:w-48 lg:w-56 mx-auto">
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={250}
              height={125}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-6xl">
        {silverSponsors.map((sponsor, index) => (
          <div key={index} className="w-24 md:w-32 lg:w-40 mx-auto">
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

