import React from 'react'
import image from './images/third-section-img.png'
const Info = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-evenly items-center mt-12'>
      <div className=''>
        <img src={image} width="500px" alt="" />
      </div>
      <div className='lg:max-w-[40%] space-y-5'>
      <h1 className='text-center text-5xl font-bold tracking-wider'>SMART HOME</h1>
        <p className='font-medium text-lg'>A smart home integrates advanced technology to enhance convenience, security, and energy efficiency. Through interconnected devices such as smart thermostats, lighting, security cameras, and voice assistants, homeowners can control and monitor their environment remotely. </p>
      </div>
    </div>
  )
}

export default Info
