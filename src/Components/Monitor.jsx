import React from 'react';
import image from './images/Mobile-phone.452b1202cec1df8f0ace.png';
import box from './images/boxes.png';

const Monitor = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 mt-24 px-6 lg:px-12">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:w-1/2">
        <h1 className="font-bold text-4xl lg:text-5xl leading-tight text-white">MONITOR <br /> HOME <br /> REMOTELY</h1>
        <ul className="space-y-4 font-medium text-lg tracking-wide">
          <li>Convenience: Check home status from anywhere with internet access.</li>
          <li>Security: Monitor for intrusions, fires, or emergencies in real-time.</li>
          <li>Control: Adjust settings like temperature and lighting remotely.</li>
          <li>Awareness: Receive alerts on suspicious activities or unexpected events instantly.</li>
        </ul>
        <div className="text-2xl font-bold space-y-2">
          <p>Service <br /> 998765</p>
          <p>DOWNLOAD AVAILABLE ON</p>
          <div className="flex justify-center lg:justify-start pt-3 gap-4">
            <img src={box} className="w-16 h-16" alt="Download Icon" />
            <img src={box} className="w-16 h-16" alt="Download Icon" />
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img src={image} className="w-3/4 lg:w-full max-w-sm" alt="Mobile Monitoring" />
      </div>
    </div>
  );
}

export default Monitor;
