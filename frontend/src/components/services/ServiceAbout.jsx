import React from 'react'

function ServiceAbout(props) {
  return (
    <div className='flex flex-col gap-7 items-center justify-center w-[60%]'>
        <div className='text-[40px] font-semibold'>
            We Can Offer You Wide Range Of Services
        </div>

        <div className='grid grid-cols-[2fr_1fr] items-center justify-center gap-10'>
            <img className='w-[600px] h-[400px] object-cover rounded-[30px]' src={props.img} alt="" />
            <div className='flex flex-col gap-4'>
                <span className='text-[30px] font-semibold'>{props.title}</span>
                <span>{props.des}</span>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default ServiceAbout