import React from 'react';
import Card_image from './images/card-content-img1.png';
import Card_image2 from './images/card-content-img2.png';
import Card_image3 from './images/card-content-img3.png';
import side_image from './images/design01.png';
import side_image2 from './images/design02.png';

const Features = () => {
  return (
    <div className=" flex flex-col lg:flex-row flex-wrap items-center justify-evenly rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 mt-20 p-6 lg:p-12">
      
      {/* Decorative Side Images */}
      <img src={side_image} width="160px" className='hidden lg:inline-block absolute left-0 mt-60' alt="" />
      <img src={side_image2} width="200px" className='hidden lg:inline-block absolute right-0 mt-96' alt="" />
      
      {/* Feature Cards */}
      <div className="flex flex-col items-center gap-2 p-6 max-w-sm text-center">
        <img src={Card_image} width="100px" alt="Security System" />
        <h1 className="font-bold text-lg text-white">SECURITY SYSTEM</h1>
        <p className="font-medium text-sm">
          Integrates advanced technology to provide comprehensive protection and remote monitoring to keep your home safe.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 p-6 max-w-sm text-center">
        <img src={Card_image2} width="100px" alt="Smart Lamp" />
        <h1 className="font-bold text-lg text-white">SMART LAMP</h1>
        <p className="font-medium text-sm">
          Uses smart lighting technology to adjust brightness, color, and timing in your home.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 p-6 max-w-sm text-center">
        <img src={Card_image3} width="100px" alt="CCTV Control" />
        <h1 className="font-bold text-lg text-white">CCTV CONTROL</h1>
        <p className="font-medium text-sm">
          Enables real-time surveillance and remote access to live camera feeds to monitor your home.
        </p>
      </div>
    </div>
  );
};

export default Features;
