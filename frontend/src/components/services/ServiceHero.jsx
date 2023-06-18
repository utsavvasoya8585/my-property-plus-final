import React from 'react'
import photo from "../../assets/service/hero.jpg";

function ServiceHero(props) {
  return (
    <div className='flex flex-col gap-4 items-start justify-start px-32 py-32 text-white' style={{backgroundImage: `url(${photo})`, backgroundSize: "cover", overflow: "hidden"}}>
        <span className='text-[65px] font-bold'>{props.title}</span>
        <span className='text-[20px]'>{props.description}</span>
        <button className='mt-4 px-10 py-3 border-2 border-white hover:bg-white hover:text-black duration-500 rounded-[40px]'>Get A Free Quote</button>
    </div>
  )
}

export default ServiceHero