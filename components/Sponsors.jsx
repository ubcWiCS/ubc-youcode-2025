
  import React from 'react';
  import Image from 'next/image';
import Link from 'next/link';
  
  const Sponsors = () => {
    const sponsors = [
      { id: 1, src: '/assets/sponsorImages/arcteryx.png', alt: 'Arcteryx', tier: 1, website: "https://arcteryx.com/ca/en" },
      { id: 2, src: '/assets/sponsorImages/sap.png', alt: 'SAP', tier: 1, website: "https://www.sap.com/canada/index.html" },
      { id: 3, src: '/assets/sponsorImages/worksafe.png', alt: 'Worksafe', tier: 2, website: "https://www.worksafebc.com/en" },
      { id: 4, src: '/assets/sponsorImages/hp.png', alt: 'HP', tier: 3, website: "https://www.hp.com/us-en/home.html" },
      { id: 5, src: '/assets/sponsorImages/ubc.png', alt: 'UBC', tier: 3, website: "https://vpstudents.ubc.ca/walter-gage/" },
      { id: 6, src: '/assets/sponsorImages/kardium.png', alt: 'Kardium', tier: 3, website: "https://kardium.com" },
      { id: 7, src: '/assets/sponsorImages/willowtree.png', alt: 'WillowTree', tier: 3, website: "https://www.willowtreeapps.com" },
      // { id: 8, src: '/assets/sponsorImages/ea.svg', alt: 'EA', tier: 5, website: "https://www.ea.com/en-ca" },
      // { id: 9, src: '/assets/sponsorImages/teadot.png', alt: 'teadot', tier: 5, website: "https://www.teadotdrinks.com" },
      // { id: 10, src: '/assets/sponsorImages/steves.png', alt: 'Steves', tier: 5, website: "https://www.stevespokebar.ca" },
    ];
  
  
    // Split sponsors by tier
    const topTierSponsors = sponsors.filter(sponsor => sponsor.tier === 1);
    const tier2Sponsors = sponsors.filter(sponsor => sponsor.tier == 2);
    const tier3Sponsors = sponsors.filter(sponsor => sponsor.tier == 3);
    const tier4Sponsors = sponsors.filter(sponsor => sponsor.tier == 4);
    const tier5Sponsors = sponsors.filter(sponsor => sponsor.tier == 5);
  
    return (
      <div className="flex flex-col items-center mt-16 lg:mt-32 bg-gray-200 bg-opacity-80 p-6 md:p-20 rounded-3xl mx-4 md:mx-16 lg:mx-32 xl:mx-64 mb-8" id="sponsors">
        <h2 className='text-[#9A348E] text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center'>
          Our Sponsors
        </h2>
  
        {/* Top Tier Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl justify-items-center">
          {topTierSponsors.map(sponsor => (
            <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[150px] md:max-w-[300px]">
              <Link href = {sponsor.website}>
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={300} // Adjust as needed
                height={200} // Adjust as needed
                className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105"
              />
              </Link>
            </div>
          ))}
        </div>
  
        {/* Other Sponsors */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full max-w-6xl justify-center justify-items-center mt-12">
          {tier2Sponsors.map(sponsor => (
            <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[100px] sm:max-w-[200px]">
                <Link href = {sponsor.website}>
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={200} // Adjust as needed
                height={100} // Adjust as needed
                className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105"
              />
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 w-full max-w-6xl justify-items-center mt-8">
          {tier3Sponsors.map(sponsor => (
            <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[50px] sm:max-w-[100px]">
               <Link href = {sponsor.website}>
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={100} // Adjust as needed
                height={50} // Adjust as needed
                className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105"
              />
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 w-full max-w-3xl justify-items-center mt-10">
          {tier5Sponsors.map(sponsor => (
            <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[70px] sm:max-w-[70px]">
               <Link href = {sponsor.website}>
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={70} // Adjust as needed
                height={70} // Adjust as needed
                className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105"
              />
              </Link>
            </div>
           
          ))}
        </div>
        
        
      </div>
    );
  };
  
  export default Sponsors;