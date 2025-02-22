import React from 'react'
import Stats from './Stats'


const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col w-2/3 bg-[#e6a9de] p-10 rounded-3xl">
        <div className="md:text-6xl text-2xl font-bold md:ml-8">
          About youCode 
        </div>
        <p className='hidden md:block text-accent-magenta font-semibold lg:text-xl mt-10'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. As we strive to build opportunities for underrepresented genders interested in tech to innovate, we create tight, welcoming communities where we empower each other. Continuing to build meaningful networks in a supportive environment is our ultimate mission.
        </p>
        <p className='text-xs md:hidden text-accent-magenta font-semibold mt-4'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. 24 hour hackathon for underrepresented genders in tech, by WIDS and WICS.
        </p>
        <p className='text-xs md:block text-accent-magenta md:tracking-wider font-semibold  md:text-xs lg:text-xl mr-20 md:mt-10'>
        Our values: Inclusivity, Visibility, Community, Wellbeing.
        </p>
      </div>
    </div>
  )
}

export default About