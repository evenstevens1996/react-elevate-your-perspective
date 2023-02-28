import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-black text-white py-2 px-2'>
        <div className='max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-2 py-8 px-4'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Pages</h6>
                <ul>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Gallery</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Social Media</h6>
                <ul>
                    <li className='py-2'><FaInstagram /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer