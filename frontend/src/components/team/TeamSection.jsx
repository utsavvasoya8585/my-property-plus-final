import React from 'react'
import photo from "../../assets/about.jpg"
import {BsPersonCheckFill} from "react-icons/bs";
import {MdSavings, MdOutlineDoneOutline} from "react-icons/md"


function TeamSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 pt-20'>
        <div className='flex flex-col gap-4 text-center'>
            <span className='text-[40px] font-semibold'>Our Team</span>
        </div>

        <div className='w-[50%] flex flex-row gap-10 px-20 py-5'>
            <div className='flex flex-col text-center gap-4'>
                <span className='font-semibold'>
                Though our leadership team come from different areas of specialisation, our focus and determination to deliver value services is always on the high!
                </span>
                <span className='text-gray-700'>
                Our service team is constantly growing along our valued customers, who are always directly reachable for services specific to the location
                </span>
            </div>

        </div>
    </div>
  )
}

export default TeamSection