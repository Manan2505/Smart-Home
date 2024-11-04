import React from 'react'
import logo from './images/logo (2).png'
import socials from './images/Instagram.png'
import socials2 from './images/WhatsApp.png'
import socials3 from './images/Twitter.png'
import socials4 from './images/Facebook.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='pt-8'>
      <div className='h-12 bg-purple-700 absolute left-0 right-0'></div>
      <div className='flex lg:flex-row flex-col items-center pt-20 justify-between pb-8 gap-14'>
        <div className='lg:max-w-[20%] flex flex-col gap-3 items-center'>
            <Link to="/"><img src={logo} onClick={()=>window.scrollTo(0,0)} className='hover:scale-105 transition-all duration-500' width="80px" alt="" /></Link>
            <p className='px-4 text-lg'>Making the world a better place through constructing elegant hierarchies.</p>
            <div className='flex gap-4'>
            <img src={socials} className='hover:scale-125 transition-all duration-500' alt="" />
            <img src={socials2} className='hover:scale-125 transition-all duration-500' alt="" />
            <img src={socials3} className='hover:scale-125 transition-all duration-500' alt="" />
            <img src={socials4} className='hover:scale-125 transition-all duration-500' alt="" />
            </div>
        </div>

        <div className='lg:max-w-[20%] flex flex-col items-center gap-6'>
            <h1 className='font-bold text-2xl p'>Online Shop</h1>
            <p className='px-4 font-medium text-lg'>Making the world a better place through constructing elegant hierarchies.</p>
        </div>

        <div className=' lg:max-w-[20%] flex flex-col items-center gap-6'>
            <h1 className='font-bold text-2xl p'>Get Help</h1>
            <p className='px-4 font-medium text-lg'>Making the world a better place through constructing elegant hierarchies.</p>
        </div>

        <div className='lg:max-w-[20%] flex flex-col items-center gap-6'>
            <h1 className='font-bold text-2xl p'>Resources</h1>
            <p className='px-4 font-medium text-lg'>Making the world a better place through constructing elegant hierarchies.</p>
        </div>
      </div>
      <div className='mb-5 h-12 bg-purple-700 absolute left-0 right-0'></div>
    </div>
  )
}

export default Footer
