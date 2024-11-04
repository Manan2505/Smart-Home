import React from 'react'
import card_image from './images/inside-card2-area-2.png'
import card_image2 from './images/inside-card2-area-3.png'
import card_image3 from './images/inside-card2-area.png'
const Types = () => {
  return (
    <div>
        <h1 className='lg:mt-12 mt-32 font-bold text-4xl text-center mb-9 tracking-wide'>SECURITY MODES TYPES</h1>
    <div className='flex flex-col lg:flex-row items-center gap-16 justify-center'>

      <div className='rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 border border-red-400 lg:max-w-[25%] flex flex-col items-center gap-6 '>
        <img src={card_image} className='p-3 mt-9' width="300px" alt="" />
        <h1 className='font-bold text-2xl'>TYPE A</h1>
        <p className='px-4 pb-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni earum officiis praesentium iure iusto?</p>
        
      </div>

      <div className='rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 border border-red-400 lg:max-w-[25%] flex flex-col items-center gap-6 '>
        <img src={card_image2} className='pt-3' width="200px" alt="" />
        <h1 className='font-bold text-2xl'>TYPE A</h1>
        <p className='px-4 pb-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni earum officiis praesentium iure iusto?</p>
        
      </div>

      <div className='rounded-lg bg-gradient-to-r from-purple-700 to-purple-600 border border-red-400 lg:max-w-[25%] flex flex-col items-center gap-6 '>
        <img src={card_image3} className='pt-3' width="200px" alt="" />
        <h1 className='font-bold text-2xl'>TYPE A</h1>
        <p className='px-4 pb-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni earum officiis praesentium iure iusto?</p>
        
      </div>
      </div>
      <p className='mt-9 text-lg font-medium'>Lorem, ipsum dquia molestias ipsam magnam, praesentium ab iste laudantium facere tempora. Lorem ipsum dolor sit amet, consectetur Lorem Lorem ipsum dolor sit, amet consectetur adipisicing.ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, libero? adipisicing elit. Ullam eligendi nihil asperiores et! Similique illum eveniet beatae rerum optio velit?</p>
    </div>
  )
}

export default Types
