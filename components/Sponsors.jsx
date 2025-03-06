import React from 'react';
import Image from 'next/image';

const Sponsors = () => {
  const sponsors = [
    { id: 1, src: '/assets/sponsorImages/arcteryx.png', alt: 'Arcteryx', tier: 1 },
    { id: 2, src: '/assets/sponsorImages/sap.png', alt: 'SAP', tier: 1 },
    // { id: 3, src: '/assets/sponsorImages/hp.png', alt: 'HP', tier: 2 },
    // { id: 4, src: '/assets/sponsorImages/willowtree.png', alt: 'WillowTree', tier: 2 },
    // { id: 5, src: '/assets/sponsorImages/ubc.png', alt: 'UBC', tier: 2 },
  ];

  // Split sponsors by tier
  const topTierSponsors = sponsors.filter(sponsor => sponsor.tier === 1);
  const otherSponsors = sponsors.filter(sponsor => sponsor.tier !== 1);

  return (
    <div className="flex flex-col items-center mt-16 lg:mt-32 bg-gray-200 bg-opacity-80 p-20 rounded-3xl mx-8 md:mx-64 md:mb-8" id="sponsors">
      <h2 className='text-[#9A348E] text-4xl md:text-6xl lg:text-7xl font-bold m-8'>
        Our Sponsors
      </h2>

      {/* Top Tier Sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full justify-items-center mt-8">
        {topTierSponsors.map(sponsor => (
          <div key={sponsor.id} className="flex justify-center items-center">
            <Image 
              src={sponsor.src} 
              alt={sponsor.alt} 
              width={250} 
              height={150} 
              className="rounded-lg object-contain transition-transform transform hover:scale-105 w-auto h-auto"
            />
          </div>
        ))}
      </div>

      {/* Other Sponsors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full justify-items-center mt-8">
        {otherSponsors.map(sponsor => (
          <div key={sponsor.id} className="flex justify-center items-center">
            <Image 
              src={sponsor.src} 
              alt={sponsor.alt} 
              width={150} 
              height={90} 
              className="rounded-lg object-contain transition-transform transform hover:scale-105 w-auto h-auto"
            />
          </div>
        ))}
      </div>
      
      <h3 className='text-[#9A348E] text-xl md:text-2xl lg:text-3xl font-bold m-8'>
        More sponsor reveals soon!
      </h3>
    </div>
  );
};

export default Sponsors;
