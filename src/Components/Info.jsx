import React from 'react';
import image from './images/third-section-img.png';

const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6 lg:px-12 mt-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img src={image} className="w-3/4 lg:w-full max-w-md" alt="Smart Home Illustration" />
      </div>
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left space-y-5">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-wide lg:tracking-wider text-white">SMART HOME</h1>
        <p className="text-base lg:text-lg font-medium leading-relaxed">
          A smart home integrates advanced technology to enhance convenience, security, and energy efficiency. Through interconnected devices such as smart thermostats, lighting, security cameras, and voice assistants, homeowners can control and monitor their environment remotely.
        </p>
      </div>
    </div>
  );
}

export default Info;
