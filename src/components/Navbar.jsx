import React, {useState} from 'react'
import {TiThMenuOutline} from 'react-icons/ti'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
      if(!nav) {
          document.body.style.overflow = 'hidden'
      } else {
          document.body.style.overflow = 'scroll'
      }
    };
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>Adventure</h1>
        <TiThMenuOutline onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
        <div  className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' : 'ease-in duration-200 absolute top-0 h-screen left-[-100%] z-10'
        }>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8'>Home</li>
                <li className='font-bold text-3xl p-8'>About</li>
                <li className='font-bold text-3xl p-8'>Gallery</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar