import axios from 'axios';
import React, { useRef, useState } from 'react'
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
    const formRef = useRef(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    async function handleSubmit(ev) {
        ev.preventDefault();

        try {
            // toast.loading("Sending...", {autoClose: 4000});
            const mailData = { name, number, subject, email, message };
            const response = await axios.post("/api/mail/query", mailData);
            toast.success("Email has been sent!");
            // Reset form after successful submission
      formRef.current.reset();
        } catch (err) {
            toast.error("Error in email sending")
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
                <span className='text-[20px] font-semibold'>
                    Send Us An Email
                </span>
                <span className='text-[15px] text-gray-500'>
                    My Property Plus is the premier property management, amenity provider. It is the seamless choice of companion for you if you are a homeowner or a tenant. We are a firm that aims to offer a stress-free rental experience. We involve a group of professionally skilled people who render such amazing services.
                </span>
            </div>

            <div className='pt-10'>
                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-7' action="">
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <input onChange={(e) => setName(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[50%]' type="text" placeholder='Name' />
                        <input onChange={(e) => setEmail(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[50%]' type="email" placeholder='XYZ@gmail.com' />
                    </div>
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <input onChange={(e) => setNumber(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[50%]' type="number" placeholder='93247XXX' name="" id="" />
                        <input onChange={(e) => setSubject(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[50%]' type="text" placeholder='Subject' />
                    </div>
                    <div>
                        <textarea onChange={(e) => setMessage(e.target.value)} className='bg-gray-100 rounded-xl w-full text-[20px] px-5 py-2' placeholder='Long Message' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button className='bg-two text-one font-bold px-5 py-2 rounded-full text-[20px]' type='submit'> Send Message</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ContactForm