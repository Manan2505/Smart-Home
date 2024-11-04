import React from 'react';
import card_image from './images/inside-card2-area-2.png';
import card_image2 from './images/inside-card2-area-3.png';
import card_image3 from './images/inside-card2-area.png';

const Types = () => {
  return (
    <div className="px-6 lg:px-12">
      {/* Title */}
      <h1 className="mt-16 lg:mt-12 font-bold text-4xl text-center mb-10 tracking-wide text-white">
        SECURITY MODES TYPES
      </h1>
      
      {/* Card Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
        
        {/* Card 1 */}
        <div className="rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 border border-purple-400 p-6 lg:w-1/4 flex flex-col items-center text-center space-y-4">
          <img src={card_image} className="w-64 mt-4" alt="Type A" />
          <h1 className="font-bold text-2xl text-white">TYPE A</h1>
          <p className="px-4 pb-6">
          This mode provides essential security features for your home, including door and window sensors, motion detectors, and alerts for any unauthorized access.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 border border-purple-400 p-6 lg:w-1/4 flex flex-col items-center text-center space-y-4">
          <img src={card_image2} className="w-48 mt-4" alt="Type B" />
          <h1 className="font-bold text-2xl text-white">TYPE B</h1>
          <p className="px-4 pb-6">
          Upgrade your security with our Advanced Monitoring mode. This feature includes live camera feeds, remote access to your security system.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 border border-purple-400 p-6 lg:w-1/4 flex flex-col items-center text-center space-y-4">
          <img src={card_image3} className="w-48 mt-4" alt="Type C" />
          <h1 className="font-bold text-2xl text-white">TYPE C</h1>
          <p className="px-4 pb-6">
          With our Smart Automation mode, integrate your security system with smart home devices to create a synchronized environment.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <p className="mt-10 text-lg font-medium text-center lg:text-left max-w-4xl mx-auto">
      Our security system integrates cutting-edge technology to ensure comprehensive protection and remote monitoring, keeping your home secure at all times. With features like motion detection, real-time alerts, and automated responses, you can have peace of mind knowing your home is always monitored.      </p>
    </div>
  );
};

export default Types;
