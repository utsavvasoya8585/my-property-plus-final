import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import photo from "../../assets/property.jpg"

function PropHero(props) {
    const socialContent = [
        { id: 1, liveLink: "https://www.facebook.com/people/Mypropertyplus/100084808515644/", icon: "fa-facebook" },
        { id: 2, liveLink: "https://www.instagram.com/mypropertyplus/", icon: "fa-instagram" },
        { id: 3, liveLink: "https://www.youtube.com/channel/UCzInr776Ip7jPRtfXbujROw", icon: "fa-youtube" },
    ];

    console.log(props.images)

    return (
        <div className='flex flex-col gap-10 mt-20 w-[100%] px-[10%]'>
            <div className='flex flex-row items-center justify-between '>
                <div className='flex flex-col'>
                    <span className='text-[30px] font-semibold'>
                        {props?.name}
                    </span>
                    <span>
                        {props?.address}
                    </span>
                </div>

                <div>
                    <ul className="flex flex-row gap-4 text-[40px] text-gray-500 ">
                        {socialContent.map((item) => (
                            <li className="hover:text-black cursor-pointer" key={item.id}>
                                <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                                    {item.id === 1 ? <BsFacebook /> : item.id === 2 ? <BsInstagram /> : <BsYoutube />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className='grid grid-cols-[2fr_1fr] gap-10 items-center justify-center'>
                <div>
                    <img className='rounded-[30px] w-[100%] h-[500px] object-cover' src={props.images ? props?.images[0] : photo} alt="" />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    {props.images && props.images.map((data, i) => {
                        return (
                            <img className='rounded-[30px] w-[100%] h-[150px] object-cover' src={data} alt="" />
                        )
                    })}
                    {/* <img className='rounded-[30px]' src={photo} alt="" />
                    <img className='rounded-[30px]' src={photo} alt="" />
                    <img className='rounded-[30px]' src={photo} alt="" />
                    <img className='rounded-[30px]' src={photo} alt="" />
                    <img className='rounded-[30px]' src={photo} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default PropHero