import React from 'react'
import photo from "../../assets/about.jpg"
import {BsPersonCheckFill} from "react-icons/bs";
import {MdSavings, MdOutlineDoneOutline} from "react-icons/md"


function AboutSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 pt-20'>
        <div className='flex flex-col gap-4 text-center'>
            <span className='text-[40px] font-semibold'>Welcome to My Property Plus</span>
            <span className='text-[20px] text-gray-600'>Top rated property service company</span>
        </div>

        <div className='flex flex-row gap-10 px-20 py-5'>
            <div className='flex flex-col gap-4'>
                <span className='font-semibold'>
                My Property Plus is the premier property management, amenity provider. It is the seamless choice of companion for you if you are a homeowner or a tenant. We are a firm that aims to offer a stress-free rental experience
                </span>
                <span className='text-gray-700'>
                My Property Plus is the premier property management, amenity provider. It is the seamless choice of companion for you if you are a homeowner or a tenant. We are a firm that aims to offer a stress-free rental experience. We involve a group of professionally skilled people who render such amazing services. You don't have to take the trouble of looking for tenants, enquiring with acquaintances, and negotiating prices. Since 2021, we've been working together to fulfill the needs and desires by reflecting on the feedback.
                </span>
                <span className='text-gray-700'>
                We provide the best customer service to solve all yqueries. portfolio is a transparent picture to you with a pure intention of providing the best services to you. We have proven to be a trustworthy firm. We are planning to expand services to several metropolitan cities like Banglore, Coimbatore, Hyderabad, etc.
                </span>
            </div>

            <div className=''>
                <img className='rounded-2xl' src={photo} alt="" />
            </div>
        </div>

        <div className='flex flex-row gap-10'>
            <div className='flex flex-row gap-5 items-center justify-center'>
                <div className='text-one text-[70px]'>
                    <BsPersonCheckFill />
                </div>
                <div className='flex flex-col'>
                    <span className='text-[30px] font-bold text-two'>50+</span>
                    <span className='text-gray-700'>Delighted Customers</span>
                </div>
            </div>

            <div className='flex flex-row gap-5 items-center justify-center'>
                <div className='text-one text-[70px]'>
                    <MdOutlineDoneOutline />
                </div>
                <div className='flex flex-col'>
                    <span className='text-[30px] font-bold text-two'>1+</span>
                    <span className='text-gray-700'>Years of Service</span>
                </div>
            </div>

            <div className='flex flex-row gap-5 items-center justify-center'>
                <div className='text-one text-[70px]'>
                    <MdSavings />
                </div>
                <div className='flex flex-col'>
                    <span className='text-[30px] font-bold text-two'>₹10 Lakh</span>
                    <span className='text-gray-700'>In Savings</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutSection