import React from 'react'
import logo from "../updown/logo.png"
import Details from './Details'
import { BsTelephoneForward, BsWhatsapp } from "react-icons/bs";
import Features from './Features';

function Section2(props) {
    return (
        <div className='grid grid-cols-[2fr_1fr] gap-5 items-center justify-center w-[100%] px-[10%]'>
            <div>
                <Features features={props?.features} />
            </div>

            <div className='flex flex-col gap-7 border-2 border-gray-300 rounded-[30px] px-10 py-5'>
                <iframe
                    title="map"
                    className="w-full h-[230px] rounded-[30px]"
                    src={props?.googleLocation}
                ></iframe>
            </div>
        </div>
    )
}

export default Section2;