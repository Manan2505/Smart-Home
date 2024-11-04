import React from 'react'
import image from './images/fifth-section-img.png'
const About = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-evenly items-center lg:mt-16 mt-28'>
      <div className=''>
        <img src={image} width="350px" alt="" />
      </div>
      <div className='lg:max-w-[40%] space-y-5'>
      <h1 className='text-center text-5xl font-bold tracking-wider'>ABOUT US</h1>
        <p className='font-medium text-lg'>Company provides top-tier security services, ensuring comprehensive protection through advanced surveillance, access control, and highly trained personnel. Our customizable solutions cover residential, commercial, and industrial sectors, offering 24/7 monitoring and rapid response.</p>
      </div>
    </div>
  )
}

export default About
