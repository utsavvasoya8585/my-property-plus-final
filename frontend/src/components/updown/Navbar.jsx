import React, { useEffect, useState } from 'react'
import logo from "./logo.png";
import { Link, useLocation } from 'react-router-dom';
import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";  

function Navbar() {
    const location = useLocation();
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let arr = location.pathname.split('/');
        console.log(arr)
        if(arr[1] === '') setActive(0);
        else if(arr[1] === 'about') setActive(1);
        else if(arr[1] === 'team') setActive(2);
        else if(arr[1] === 'services') setActive(3);
        else if(arr[1] === 'properties') setActive(4);
        else if(arr[1] === 'blogs' || arr[1] === "singleBlog") setActive(5);
        else if(arr[1] === 'contact') setActive(6);
    }, [location]);

    useEffect(() => {
        setOpen(!open);
    }, [active])

    const linkClasses = (i) => {
        if(i === active) return "text-xl bg-one px-4 rounded-2xl py-2 duration-500";
        return "text-xl px-4 rounded-2xl py-2  duration-500";
    }
    return (
        <div className='shadow-md w-full top-0 left-0 overflow-hidden'>
            <div className='md:flex items-center justify-between bg-white md:px-10 px-7 py-2'>
                <div className='w-[200px]'>
                    <img src={logo}/>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <AiOutlineClose /> : <FiMenu />}
                </div>
                
                <ul className={`${open ? "top-[80px]" : "top-[-490px]"} md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
                    <Link to={"/"} onClick={() => setActive(0)} className={linkClasses(0)}><li>Home</li></Link>                   
                    <Link to={"/about"} onClick={() => setActive(1)}  className={linkClasses(1)}><li>About Us</li></Link>
                    <Link to={"/team"} onClick={() => setActive(2)}  className={linkClasses(2)}><li>Team</li></Link>            
                    <Link to={"/services"} onClick={() => setActive(3)} className={linkClasses(3)}><li>Services</li></Link>                   
                    <Link to={"/properties"} onClick={() => setActive(4)} className={linkClasses(4)}><li>Rental Properties</li></Link>
                    <Link to={"/blogs"} onClick={() => setActive(5)} className={linkClasses(5)}><li>Blogs</li></Link>                   
                    <Link to={"/contact"} onClick={() => setActive(6)} className={linkClasses(6)}><li>Contact us</li></Link>
                </ul>


            </div>
            
        </div>
    )
}

export default Navbar