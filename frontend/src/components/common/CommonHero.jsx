import React from 'react'
import photo from "../../assets/inner-page.jpg"

function CommonHero(props) {
  return (
    <div className='flex flex-col items-start justify-start px-32 py-32 text-white' style={{backgroundImage: `url(${photo})`, backgroundSize: "cover", overflow: "hidden"}}>
        <span className='text-[30px]'>{props.subTitle}</span>
        <span className='text-[65px] font-bold'>{props.title}</span>
    </div>
  )
}

export default CommonHero