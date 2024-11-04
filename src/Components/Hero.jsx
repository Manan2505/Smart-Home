import React from 'react'
import Hero_image from './images/firstImg.png'
import Hero_image2 from './images/second-section-img.png'
import Button from './Button'
import design from './images/design01.png'
import design2 from './images/design02.png'
import Features from './Features'
import Types from './Types'
import Info from './Info'
import Monitor from './Monitor'
import About from './About'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='App '>
    <div className='flex flex-col-reverse items-center lg:flex-row justify-center lg:gap-32 pt-14 mt-14'>
      <div className="space-y-3 mt-14">
        <h1 className='text-6xl font-bold tracking-wider'>FUTURE IS <br/> NOW</h1>
        <p className='text-5xl font-bold '>SMART HOME</p>
        <p className='text-xl font-medium'>Smart gadgets at lower prices</p>
        <Link to="/access"><button className='rounded-lg py-2 px-3 bg-purple-400 hover:bg-purple-500'>Explore More</button></Link>
      </div>
      <div className=''>
        <img src={Hero_image} width="400px" alt="" />
      </div>
      <img src={design} width="160px" className='hidden lg:inline-block absolute max-w-[200px] left-0 mt-64' alt="" />
      <img src={design2} width="200px" className='hidden lg:inline-block absolute right-0 mt-32' alt="" />
        
     
    </div>
    {/* second part */}
    <div className='flex flex-col items-center lg:flex-row justify-evenly pt-12 gap-10'>
    <div >
        <img src={Hero_image2} width="350px" alt="" />
      </div>

      <div className='my-auto max-w-[40%]'> 
        <h1 className='font-bold text-5xl'>SMART HOME</h1>
        <p className='font-bold text-2xl'>Security System</p>
        <p className='text-lg font-medium'>Integrates advanced technology to provide <br/> comprehensive protection for homes.  Includes features like motion detectors, smart locks, and alarm systems that can be controlled remotely via a smartphone or other connected devices.</p>
      </div>
      </div>
      <Features/>
      <Types/>
      <Info/>
      <Monitor/>
      <About/>
    </div>
  )
}

export default Hero
