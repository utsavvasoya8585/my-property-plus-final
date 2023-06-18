import React from 'react'
import GridCard from '../common/GridCard'
import {VscWorkspaceTrusted} from "react-icons/vsc"
import {GiVibratingShield, GiTakeMyMoney} from "react-icons/gi"

function ChooseSection() {
    const data = [
    {
        title: "Trusted By Thousands",
        description: "The team of professionals in team adopts the latest technology to offer the best property services. We offer assistance in offering a vibrant look and feel to yhome. Besides this, the services we offer play an integral role in enhancing the style quotient of yhouse.",
        iconName: "0",
    },
    {
        title: "Top Rated Property Services Company",
        description: "Are you searching for the best electrician for yhome? We have a team of professionals in team who offer assistance in offering electricity services in Chennai without breaking the bank.",
        iconName: "1",
    },
    {
        title: "Financing Made Easy",
        description: "We are recognized to be a well-known company, offering top-rated property services at a price that is at least 30% off. There are wide assortments of professionals in team who stand second to none in offering top-rated property services within an exclusive budget.",
        iconName: "2",
    }
]
  return (
    <div className='flex flex-col items-center justify-center pb-10 pt-20'>
        <div className='text-[40px] font-medium'>Why Choose Us</div>

        <div className='text-[20px] pb-16'>We provide full service at every step</div>

        <div className='flex flex-row gap-10 items-center justify-center'>
            {data?.map((item) => {
                return (
                    <div className='flex flex-col items-center justify-center text-one hover:text-two duration-500 text-center gap-5 w-[25%] shadow-xl hover:shadow-2xl p-10'>
                        <div className='pb-10 text-[90px] '>{item.iconName === "0" ? <VscWorkspaceTrusted /> : item.iconName === "1" ? <GiVibratingShield /> : <GiTakeMyMoney /> }</div>
                        <div className='text-[20px] text-black'>{item.title}</div>
                        <div className='text-gray-500'>{item.description}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ChooseSection