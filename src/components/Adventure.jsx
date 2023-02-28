import React from 'react'
import Yosemite from '../app/assets/img/Yosemite.JPG';
import SC from '../app/assets/img/SC.jpg';
import Maui7 from '../app/assets/img/Maui7.jpg';
import Maui3 from '../app/assets/img/Maui3.jpg';
import Cancun1 from '../app/assets/img/Cancun1.jpg';

const Adventure = () => {
  return (
    <div className='max-w-[1400px] bg-gray-300 mx-auto my-20 pt-16 m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={Yosemite} alt="watefall" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={SC} alt="ocean" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={Maui7} alt="valley" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={Maui3} alt="waterfall2" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={Cancun1} alt="ocean2" />
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Find The Adventure In You</h3>
            <p className='text-2xl py-6'>We hope that our travels will inspire the adventurer in you.</p>
            <p className='pb-6'> Every place has a story, now it's time to find the story in you.</p>
            <div>
            <button className='bg-black text-white border-black mr-4 hover:shadow-xl'>Join the Adventure</button>
            <button className='bg-black text-white border-black mr-4 hover:shadow-xl'>Contact Us</button>
            </div>
        </div>
            
    </div>
  )
}

export default Adventure