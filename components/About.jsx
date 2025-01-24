import React from 'react'
import Stats from './Stats'


const About = () => {
  return (
    <div className='flex mt-10 md:ml-32 ml-16' id="about">
      <div className="flex flex-col w-2/3">
        <div className="md:text-8xl text-2xl font-bold drop-shadow-[0_0_4px_#E2D6FF] md:ml-8">
          About youCode 
        </div>
        <p className='hidden drop-shadow-md md:block text-accent-magenta font-semibold lg:text-xl mt-10'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. As we strive to build opportunities for underrepresented genders interested in tech to innovate, we create tight, welcoming communities where we empower each other. Continuing to build meaningful networks in a supportive environment is our ultimate mission.
        </p>
        <p className='text-xs md:hidden drop-shadow-md text-accent-magenta font-semibold mt-4'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. 24 hour hackathon for underrepresented genders in tech, by WIDS and WICS.
        </p>
        <p className='text-xs md:block text-accent-magenta drop-shadow-md md:tracking-wider font-semibold  md:text-xs lg:text-xl mr-20 md:mt-10 font-bold'>
        Our values: Inclusivity, Visibility, Community, Wellbeing.
        </p>
      </div>
    </div>
  )
}

export default About