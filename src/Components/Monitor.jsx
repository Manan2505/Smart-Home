import React from 'react'
import image from './images/Mobile-phone.452b1202cec1df8f0ace.png'
import box from './images/boxes.png'
const Monitor = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse items-center justify-center mt-24'>
      <div className='flex flex-col items-center gap-9'>
        <h1 className='font-bold text-5xl'> MONITOR <br/> HOME <br/> REMOTELY</h1>
        <ul className='space-y-4 font-medium text-lg tracking-wider'>
            <li>Convenience: Check home status from anywhere with internet access.</li>
            <li>Security: Monitor for intrusions, fires, or emergencies in real-time.</li>
            <li>Control: Adjust settings like temperature and lighting remotely.</li>
            <li>Awareness: Receive alerts on suspicious activities or unexpected events instantly.</li>
        </ul>
        <div className='text-center font-bold text-2xl'>
            <p>Service <br/> 998765</p>
            <p>DOWNLOAD AVAILABLE ON</p>
            <div className='flex pt-5 gap-6'>
            <img src={box} alt="" />
            <img src={box} alt="" />
            </div>
        </div>
      </div>
      <div>
        <img src={image} width="300px" alt="" />
      </div>
    </div>
  )
}

export default Monitor;
