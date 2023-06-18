import React from 'react'
import { Link } from 'react-router-dom'

function Footer1() {
  return (
    <div className='bg-one flex flex-row px-32 py-10 items-center justify-between mt-20'>
        <div className='flex flex-col text-two'>
            <span className='text-[35px] font-medium'>SMARTEST PROTECTION FOR PROPERTY</span>
            <span className='text-[20px]'>Get in touch with us, one of executives will contact you</span>
        </div>
        <Link to={"/contact"}>
            <button className='bg-two text-one text-[30px] px-16 py-3 rounded-2xl'>Contact Us</button>
        </Link>
    </div>
  )
}

export default Footer1