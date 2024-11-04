import React from 'react';
import Hero_image from './images/firstImg.png';
import Hero_image2 from './images/second-section-img.png';
import Button from './Button';
import design from './images/design01.png';
import design2 from './images/design02.png';
import Features from './Features';
import Types from './Types';
import Info from './Info';
import Monitor from './Monitor';
import About from './About';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <div className=" flex flex-col-reverse items-center lg:flex-row justify-center pt-8 lg:pt-20 px-6 lg:px-12">
        <div className="space-y-4 mt-10 lg:mt-0 lg:w-1/2 text-center lg:text-center">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-wide lg:tracking-wider text-white">FUTURE IS <br /> NOW</h1>
          <p className="text-3xl lg:text-5xl font-semibold ">SMART HOME</p>
          <p className="text-lg lg:text-xl font-medium">Smart gadgets at lower prices</p>
          <Link to="/access">
            <button className="rounded-lg py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white transition-all duration-200">
              Explore More
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img src={Hero_image} className="w-3/4 lg:w-2/3" alt="Smart Home" />
        </div>
        <img src={design} width="160px" className='hidden lg:inline-block absolute max-w-[200px] left-0 mt-64' alt="" />
      <img src={design2} width="200px" className='hidden lg:inline-block absolute right-0 mt-32' alt="" />
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly pt-12 gap-10 px-6 lg:px-12">
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img src={Hero_image2} className="w-3/4 lg:w-2/3" alt="Security System" />
        </div>
        <div className="lg:w-1/2 max-w-xl text-center lg:text-left space-y-3">
          <h1 className="font-bold text-4xl lg:text-5xl text-white">SMART HOME</h1>
          <p className="font-semibold text-2xl lg:text-3xl">Security System</p>
          <p className="text-lg font-medium leading-relaxed">
            Integrates advanced technology to provide comprehensive protection for homes. Includes features like motion detectors, smart locks, and alarm systems that can be controlled remotely via a smartphone or other connected devices.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <Features />
      <Types />
      <Info />
      <Monitor />
      <About />
    </div>
  );
};

export default Hero;
