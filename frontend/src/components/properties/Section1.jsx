import React, { useState } from 'react'
import logo from "../updown/logo.png"
import Details from './Details'
import axios from "axios";
import { BsTelephoneForward, BsWhatsapp } from "react-icons/bs";
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Section1(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    let propertyName = props?.name;

    async function handleSubmit(ev) {
        ev.preventDefault();

        try {
            const mailData = { propertyName, name, number, subject, email, message };
            const response = await axios.post("/api/mail/query", mailData);
            toast.success("Email has been sent!");
        } catch (err) {
            alert("Error in Sending");
        }
    }

    return (
        <div className='grid grid-cols-[2fr_1fr] gap-5 items-center justify-center w-[100%] px-[10%]'>
            <div>
                <Details category={props?.category} floor={props?.floor} bedrooms={props?.bedrooms} bathrooms={props?.bathrooms} fStatus={props?.fStatus} water={props?.water} parking={props?.parking} lift={props?.lift} gatedSecurity={props?.gatedSecurity} vParking={props?.vParking} power={props?.power} pets={props?.pets} />
            </div>

            <div className='flex flex-col gap-7 border-2 border-gray-300 rounded-[30px] px-10 py-5'>
                <div className='flex flex-col gap-5'>
                    <span className='text-[20px] font-semibold'>Property By</span>
                    <div className='flex flex-row gap-4 items-center justify-center'>
                        <img className='w-[150px] h-[50px] object-cover' src={logo} alt="" />
                        <div className='flex flex-col gap-2'>
                            <span>Mr.Santhosh</span>
                            <span>+91 6353839209</span>
                            <span>info@myproperty.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <form className='flex flex-col gap-7' onSubmit={handleSubmit} action="">
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

                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-[25px] font-semibold'>
                        (or)
                    </span>

                    <button className='flex flex-row gap-3 items-center justify-center bg-one text-[20px] font-semibold rounded-2xl px-[70px] py-3'> <BsTelephoneForward /> Call</button>
                    <button className='flex flex-row gap-3 items-center justify-center bg-one text-[20px] font-semibold rounded-2xl px-[70px] py-3'><BsWhatsapp /> Whatsapp</button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Section1