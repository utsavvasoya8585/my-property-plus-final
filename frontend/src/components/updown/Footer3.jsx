import React from 'react'
import { Link } from 'react-router-dom'

function Footer3() {
    return (
        <div className='bg-three flex flex-col items-center justify-center gap-5'>
            <div className='w-full flex flex-row items-center justify-between text-gray-400 gap-10 px-24 py-10'>
                <div>
                    <ul className='flex flex-row gap-5'>
                        <li>About Us</li>
                        <li>Rental Property</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    © 2023 Copyrights | All rights reserved.
                </div>
            </div>

            <Link to={"https://vasoyabrothers.com"} className='text-[23px] text-white pb-6 hover:text-one duration-500'>
            Developed and Maintain by Vasoya Brothers Infotech
            </Link>
        </div>
    )
}

export default Footer3