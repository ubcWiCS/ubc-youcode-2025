import React from 'react';
import Image from 'next/image';

const Sponsors = () => {
  const sponsors = [
    { id: 1, src: '/assets/sponsorImages/arcteryx.png', alt: 'Arcteryx', tier: 1, website: "https://arcteryx.com/ca/en" },
    { id: 2, src: '/assets/sponsorImages/sap.png', alt: 'SAP', tier: 1, website: "https://www.sap.com/canada/index.html" },
    { id: 3, src: '/assets/sponsorImages/worksafe.png', alt: 'Worksafe', tier: 2, website: "https://www.worksafebc.com/en" },
    { id: 4, src: '/assets/sponsorImages/hp.png', alt: 'HP', tier: 3, website: "https://www.hp.com/us-en/home.html" },
    { id: 5, src: '/assets/sponsorImages/ubc.png', alt: 'UBC', tier: 3, website: "https://vpstudents.ubc.ca/walter-gage/" },
    { id: 6, src: '/assets/sponsorImages/kardium.png', alt: 'Kardium', tier: 4, website: "https://kardium.com" },
    { id: 7, src: '/assets/sponsorImages/willowtree.png', alt: 'WillowTree', tier: 4, website: "https://www.willowtreeapps.com" },
    { id: 8, src: '/assets/sponsorImages/ea.svg', alt: 'EA', tier: 5, website: "https://www.ea.com/en-ca" },
    { id: 9, src: '/assets/sponsorImages/teadot.png', alt: 'teadot', tier: 5, website: "https://www.teadotdrinks.com" },
    { id: 10, src: '/assets/sponsorImages/steves.png', alt: 'Steves', tier: 5, website: "https://www.stevespokebar.ca" },
  ];

  // Split sponsors by tier
  const topTierSponsors = sponsors.filter(sponsor => sponsor.tier === 1);
  const otherSponsors = sponsors.filter(sponsor => sponsor.tier !== 1);

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const getLogoSize = (tier) => {
    const baseSize = 100;
    return {
      width: baseSize + (5 - tier) * 50,
      height: baseSize + (5 - tier) * 50,
    };
  };

  return (
    <div className="flex flex-col items-center mt-16 lg:mt-32 bg-gray-200 bg-opacity-80 p-6 md:p-20 rounded-3xl mx-4 md:mx-16 lg:mx-32 xl:mx-64 mb-8" id="sponsors">
      <h2 className='text-[#9A348E] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center'>
        Our Sponsors
      </h2>

      {Object.keys(groupedSponsors)
        .sort((a, b) => Number(a) - Number(b))
        .map((tier) => (
          <div key={tier} className="w-full max-w-6xl mt-8">
            <div className="flex flex-wrap justify-center gap-6">
              {groupedSponsors[Number(tier)].map((sponsor) => {
                const { width, height } = getLogoSize(sponsor.tier);
                return (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={width}
                      height={height}
                      layout='intrinsic'
                      className="rounded-lg object-contain transition-transform transform hover:scale-105"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        ))}

      <h3 className='text-[#9A348E] text-xl md:text-2xl lg:text-3xl font-bold mt-8 text-center'>
        More sponsor reveals soon!
      </h3>
    </div>
  );
};

export default Sponsors;