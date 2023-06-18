import React from 'react'

function ContactSection() {
    return (
        <div className='flex flex-col gap-5'>
            <div className="">
                <div className="flex flex-col gap-7">
                    <h4 className='text-[20px] text-black'>Contact Us</h4>
                    <ul className="flex flex-col gap-5 text-[14px] text-gray-400">

                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] text-black">Chennai</h5>
                            <li>
                                <a href="tel:+914435002526">+91 44350 xxx</a>
                            </li>
                            <li>
                                <a href="tel:+918637621066">+91 86376 xxx</a>
                            </li>
                            <li>
                                <a href="mailto:hello@mypropertyplus.com">hello@mypropertyplus.com</a>
                            </li>
                        </li>

                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] text-black">Madurai</h5>
                            <li>
                                <a href="tel:+916381174868">+91 63811 74868</a>
                            </li>

                        </li>

                    </ul>
                </div>
            </div>
            {/* End .col */}

            <div className="">
                <div className="flex flex-col gap-7">
                    <h4 className='text-[20px] text-black'>Contact Us</h4>
                    <ul className="flex flex-col gap-5 text-[14px] text-gray-400">
                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] ">My Property Plus - Chennai - India</h5>
                            <a href="#">#2, Golden Perch(2nd Floor), Wheat Croft Road, Nungambakkam, Chennai, 600034.</a>
                        </li>

                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] text-black">My Property Plus - UAE</h5>
                            <a href="#"> Flat #515, Al Hai Building, Al Mankhool, Dubai, UAE.</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End .col */}
        </div>
    )
}

export default ContactSection