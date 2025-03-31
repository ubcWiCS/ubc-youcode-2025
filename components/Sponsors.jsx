
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
      { id: 11, src: '/assets/sponsorImages/lowentropy.png', alt: 'Low Entropy', tier: 5, website: "https://lowentropy.org" },
      { id: 12, src: '/assets/sponsorImages/cwi.png', alt: "Community Womens's Initiative", tier: 5, website: "https://www.communitywomensinitiative.com" },
      { id: 13, src: '/assets/sponsorImages/rtc.png', alt: "Rewriting the Code", tier: 5, website: "https://rewritingthecode.org" },
      { id: 14, src: '/assets/sponsorImages/sprouts.png', alt: "Sprouts", tier: 5, website: "http://www.ubcsprouts.ca" },
      { id: 14, src: '/assets/sponsorImages/foodstash.png', alt: "Food Stash", tier: 5, website: "https://www.foodstash.ca" },
      { id: 16, src: '/assets/sponsorImages/ea.svg', alt: "Electronic Arts", tier: 6, website: "https://www.ea.com/en-ca" },
      { id: 17, src: '/assets/sponsorImages/custompins.png', alt: "Custom Pins", tier: 6, website: "https://www.custompins.ca/info/about-us" },
      { id: 18, src: '/assets/sponsorImages/codecrafters.png', alt: "CodeCrafters", tier: 6, website: "https://codecrafters.io" },
      { id: 19, src: '/assets/sponsorImages/teadot.png', alt: 'teadot', tier: 6, website: "https://www.teadotdrinks.com" },
      { id: 20, src: '/assets/sponsorImages/steves.png', alt: 'Steves', tier: 6, website: "https://www.stevespokebar.ca" },
      { id: 21, src: '/assets/sponsorImages/loafe.webp', alt: "Loafe Cafe", tier: 6, website: "https://loafe.ca" },
      { id: 22, src: '/assets/sponsorImages/indomie.png', alt: "Indomie", tier: 6, website: "https://indomieonline.ca" },
      { id: 23, src: '/assets/sponsorImages/herbaland.png', alt: "Herbaland", tier: 6, website: "https://www.herbaland.ca" },
      { id: 24, src: '/assets/sponsorImages/genuinetea.png', alt: "Genuine Tea", tier: 6, website: "https://www.genuinetea.ca" },
      { id: 25, src: '/assets/sponsorImages/yeos.png', alt: "Yeo's", tier: 6, website: "https://yeosusa.com" },
      { id: 26, src: '/assets/sponsorImages/caterdash.png', alt: "Caterdash", tier: 6, website: "https://www.caterdash.com" },
      { id: 25, src: '/assets/sponsorImages/bonmacaron.png', alt: "Bon Macaron", tier: 6, website: "https://bonmacaronpatisserie.com" },
    ];
  
  
    // Split sponsors by tier
    const topTierSponsors = sponsors.filter(sponsor => sponsor.tier === 1);
    const tier2Sponsors = sponsors.filter(sponsor => sponsor.tier == 2);
    const tier3Sponsors = sponsors.filter(sponsor => sponsor.tier == 3);
    const tier4Sponsors = sponsors.filter(sponsor => sponsor.tier == 4);
    const tier5Sponsors = sponsors.filter(sponsor => sponsor.tier == 5);
    const tier6Sponsors = sponsors.filter(sponsor => sponsor.tier == 6);
  
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

        <h2 className='text-[#9A348E] text-xl md:text-2xl lg:text-4xl font-bold m-8 text-center'>
          Community Partners
        </h2>

        <div className="grid grid-cols-3 w-full max-w-3xl justify-items-center">
          {tier5Sponsors.map(sponsor => (
            <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[70px] sm:max-w-[70px]">
               <Link href = {sponsor.website}>
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={70} // Adjust as needed
                height={70} // Adjust as needed
                className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105 m-4"
              />
              </Link>
            </div>
           
          ))}
        </div>

        <h2 className='text-[#9A348E] text-xl md:text-2xl lg:text-4xl font-bold m-8 text-center'>
          In-Kind Sponsors
        </h2>
        <div className="grid grid-cols-4 w-full max-w-3xl justify-items-center">
          {tier6Sponsors.map(sponsor => (
            <div key={sponsor.id} className="flex justify-center items-center w-full max-w-[70px] sm:max-w-[70px]">
               <Link href = {sponsor.website}>
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={70} // Adjust as needed
                height={70} // Adjust as needed
                className="rounded-lg object-contain w-full h-auto transition-transform transform hover:scale-105 m-2"
              />
              </Link>
            </div>
           
          ))}
        </div>
        
        
      </div>
    );
  };
  
  export default Sponsors;