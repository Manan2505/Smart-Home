import React from 'react';
import image from './images/fifth-section-img.png';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center mt-28 lg:mt-16 px-6">
      
      {/* Image Section */}
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <img src={image} width="350px" alt="About Us" />
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:max-w-[40%] space-y-5">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-wider text-white">ABOUT US</h1>
        <p className="font-medium text-lg text-white">
          Our company provides top-tier security services, ensuring comprehensive protection through advanced surveillance, access control, and highly trained personnel. We offer customizable solutions for residential, commercial, and industrial sectors with 24/7 monitoring and rapid response.
        </p>
      </div>
    </div>
  );
};

export default About;
