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
    <div className="flex flex-col items-center mt-16 lg:mt-32 bg-gray-200 bg-opacity-80 p-6 md:p-20 rounded-3xl mx-4 md:mx-16 lg:mx-32 xl:mx-64 mb-8" id="sponsors">
      <h2 className='text-[#9A348E] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center'>
        Our Sponsors
      </h2>

      {/* Top Tier Sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl justify-items-center">
        {topTierSponsors.map(sponsor => (
          <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[200px] md:max-w-[400px]">
            <Image 
              src={sponsor.src} 
              alt={sponsor.alt} 
              width={400} // Adjust as needed
              height={200} // Adjust as needed
              className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Other Sponsors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl justify-items-center mt-8">
        {otherSponsors.map(sponsor => (
          <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[150px] sm:max-w-[200px]">
            <Image 
              src={sponsor.src} 
              alt={sponsor.alt} 
              width={200} // Adjust as needed
              height={100} // Adjust as needed
              className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      <h3 className='text-[#9A348E] text-xl md:text-2xl lg:text-3xl font-bold mt-8 text-center'>
        More sponsor reveals soon!
      </h3>
    </div>
  );
};

export default Sponsors;