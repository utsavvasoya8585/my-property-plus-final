import React from 'react'
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"

function Footer2() {
    const socialContent = [
        { id: 1, liveLink: "https://www.facebook.com/people/Mypropertyplus/100084808515644/", icon: "fa-facebook" },
        { id: 2, liveLink: "https://www.instagram.com/mypropertyplus/", icon: "fa-instagram" },
        { id: 3, liveLink: "https://www.youtube.com/channel/UCzInr776Ip7jPRtfXbujROw", icon: "fa-youtube" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='bg-two flex flex-row text-white gap-10 px-24 py-10'>
            <div className="">
                <div className="flex flex-col gap-7">
                    <h4 className='text-[20px]'>About Site</h4>
                    <p className='text-[14px] text-gray-400'>
                        We're reimagining how you buy, sell and rent. It's now easier to get
                        into a place you love. So let's do this, together.
                    </p>
                </div>
            </div>
            {/* End .col */}

            <div className="">
                <div className="flex flex-col gap-7">
                    <h4 className='text-[20px]'>Contact Us</h4>
                    <ul className="flex flex-col gap-5 text-[14px] text-gray-400">

                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] text-white">Chennai</h5>
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
                            <h5 className="text-[16px] text-white">Madurai</h5>
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
                    <h4 className='text-[20px]'>Contact Us</h4>
                    <ul className="flex flex-col gap-5 text-[14px] text-gray-400">
                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] text-white">My Property Plus - Chennai - India</h5>
                            <a href="#">#2, Golden Perch(2nd Floor), Wheat Croft Road, Nungambakkam, Chennai, 600034.</a>
                        </li>

                        <li className='flex flex-col gap-2'>
                            <h5 className="text-[16px] text-white">My Property Plus - UAE</h5>
                            <a href="#"> Flat #515, Al Hai Building, Al Mankhool, Dubai, UAE.</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End .col */}

            <div className=" text-gray-400">
                <div className="flex flex-col gap-5">
                    <h4 className='text-[20px] text-white'>Follow us</h4>
                    <ul className="flex flex-row gap-4 text-[20px]">
                        {socialContent.map((item) => (
                            <li className="" key={item.id}>
                                <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                                    {item.id === 1 ? <BsFacebook /> : item.id === 2 ? <BsInstagram /> : <BsYoutube />}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h4 className='text-[20px] text-white'>Subscribe</h4>
                    <form className="" onClick={handleSubmit}>
                        <div className="flex flex-row items-center gap-5 justify-between">
                            <div className="">
                                <input
                                    type="email"
                                    className="px-3 py-2 rounded-2xl"
                                    id="inlineFormInput"
                                    placeholder="Your email"
                                />
                            </div>

                            <div className="">
                                <button type="submit" className="border-2 border-gray-400 rounded-2xl px-3 py-2">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer2