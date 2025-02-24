import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  const sponsors = [
    { id: 1, src: '/assets/sponsorImages/arcteryx.png', alt: 'Arcteryx' },
    { id: 2, src: '/assets/sponsorImages/hp.png', alt: 'HP' },
    { id: 3, src: '/assets/sponsorImages/sap.png', alt: 'SAP' },
    { id: 4, src: '/assets/sponsorImages/willowtree.png', alt: 'WillowTree' },
    { id: 5, src: '/assets/sponsorImages/ubc.png', alt: 'UBC' },
  ];

  return (
    <div className="flex flex-col lg:mt-32" id="sponsors">
      <p className='text-xl md:text-4xl lg:text-6xl font-bold text-white ml-8'> 
        Our Sponsors 
      </p>

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
    </div>
  )
}

export default Sponsors;
