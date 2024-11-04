import React from 'react'
import Card_image from './images/card-content-img1.png'
import Card_image2 from './images/card-content-img2.png'
import Card_image3 from './images/card-content-img3.png'
import side_image from './images/design01.png'
import side_image2 from './images/design02.png'
const Features = () => {
  return (
    <div className=' flex flex-col lg:flex-row flex-wrap items-center justify-evenly rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 mt-20'>
      <img src={side_image} width="160px" className='hidden lg:inline-block absolute left-0 mt-60' alt="" />
      <img src={side_image2} width="200px" className='hidden lg:inline-block absolute right-0 mt-96' alt="" />
       <div className=' flex flex-col items-center gap-2 my-2 p-8 pt-10'>
        <img src={Card_image} width="100px" alt="" />
        <h1 className='font-bold text-lg'>SECURITY SYSTEM</h1>
        <p className='font-medium'>Integrates advanced technology to provide comprehensive protection and remote monitoring to keep your home safe.</p>
      </div>

      <div className='flex flex-col items-center gap-2 my-2 p-8'>
        <img src={Card_image2} width="100px" alt="" />
        <h1 className='font-bold text-lg'>SMART LAMP</h1>
        <p className='font-medium'>Uses smart lighting technology to adjust brightness, color and timing in your home.</p>
      </div>

      <div className='flex flex-col items-center gap-2 my-2 pt-14 p-8'>
        <img src={Card_image3} width="100px" alt="" />
        <h1 className='font-bold text-lg'>CCTV CONTROL</h1>
        <p className='font-medium'>Enables real-time surveillance and remote access to live camera feeds, to monitor your home </p>
      </div>
     
    </div>
  )
}

export default Features
