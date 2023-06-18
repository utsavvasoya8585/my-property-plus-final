import React from 'react'
import {GoVerified} from "react-icons/go"
import {BiTimer} from "react-icons/bi"
import {GiAutoRepair} from "react-icons/gi"
import {AiOutlineFileDone} from "react-icons/ai"

function Include() {

    const data = [
        {
            title: "Verified Tenants",
            description: "Background verification of tenants and income verification.",
            iconName: "0",
        },
        {
            title: "On Time Rent",
            description: "On time rent collection through our agents.",
            iconName: "1",
        },
        {
            title: "Periodic Home Maintenance",
            description: "Residential property maintenance, preventive maintenance, emergency maintenance and more.",
            iconName: "2",
        },
        {
            title: "Rent Agreement",
            description: "Rental property agreement with background check and other deeds will be taken care of.",
            iconName: "3",
        }
    ]

  return (
    <div className='flex flex-col items-center justify-center pb-10 pt-20 w-[90%]'>
        <div className='text-[40px] font-medium'>Included In Our Service</div>

        <div className='text-[20px] pb-16'>WHAT YOU GET</div>

        <div className='flex flex-row gap-10 items-center justify-center'>
            {data?.map((item) => {
                return (
                    <div className='flex flex-col items-center justify-center text-one hover:text-two duration-500 text-center gap-5 w-[25%] shadow-xl hover:shadow-2xl p-10'>
                        <div className='pb-10 text-[90px] '>{item.iconName === "0" ? <GoVerified /> : item.iconName === "1" ? <BiTimer /> : item.iconName === "2" ?  <GiAutoRepair /> : <AiOutlineFileDone /> }</div>
                        <div className='text-[20px] text-black'>{item.title}</div>
                        <div className='text-gray-500'>{item.description}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Include