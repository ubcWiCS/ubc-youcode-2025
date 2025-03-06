import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  const sponsors = [
    { id: 1, src: '/assets/sponsorImages/arcteryx.png', alt: 'Arcteryx' },
    // { id: 2, src: '/assets/sponsorImages/hp.png', alt: 'HP' },
    { id: 3, src: '/assets/sponsorImages/sap.png', alt: 'SAP' },
    // { id: 4, src: '/assets/sponsorImages/willowtree.png', alt: 'WillowTree' },
    // { id: 5, src: '/assets/sponsorImages/ubc.png', alt: 'UBC' },
  ];

  return (
    <div className="flex flex-col items-center mt-16 lg:mt-32 bg-gray-200 bg-opacity-80 p-10 rounded-3xl  ml-8 mr-8 md:mt-64 md:mr-64 md:ml-64 md:mb-8" id="sponsors">
      <h2 className='text-[#9A348E] text-4xl md:text-6xl lg:text-7xl font-bold m-8'>
        Our Sponsors
      </h2>

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex justify-center w-full mb-12"> 
          {sponsors.slice(0, 3).map(sponsor => (
            <div key={sponsor.id} className="flex justify-center mx-12"> 
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={200} 
                height={120} 
                className="rounded-lg object-contain transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full">
          {sponsors.slice(3).map(sponsor => (
            <div key={sponsor.id} className="flex justify-center mx-12"> 
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={200} 
                height={120} 
                className="rounded-lg object-contain transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div> 
      <h3 className='text-[#9A348E] text-xl md:text-2xl lg:text-3xl font-bold m-8'>
        More sponsor reveals soon!
      </h3>
    </div>
  );
};

export default Sponsors;

