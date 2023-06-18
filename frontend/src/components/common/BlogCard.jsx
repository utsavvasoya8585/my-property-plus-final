import React from 'react'
import { Link } from "react-router-dom";
import photo from "../../assets/property.jpg"

function BlogCard(props) {

    return (
        <Link to={"/singleBlog/"+props?.id} className='shadow-xl hover:shadow-2xl duration-500 cursor-pointer p-4 flex flex-col gap-4'>
            <div className='w-[300px]'>
                <img src={props?.photo} alt="" />
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-one'>{props?.blogType}</div>
                <div className='font-bold'>{props?.title}</div>
                <hr />
                <div className='pt-2 font-bold flex flex-row items-center justify-between'>
                    <span>Prakash Ramadas</span>
                    <span>{}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard