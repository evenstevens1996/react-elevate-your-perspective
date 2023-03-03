import React from 'react';
import Banff4 from '../app/assets/img/Banff4.jpg';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={Banff4}
        alt='Lake Louise'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
      <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Elevate Your Perspective
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Changing the way you look at things.
          </p>
          <button className='bg-white text-black '>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;