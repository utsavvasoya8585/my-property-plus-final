import React, { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import photo from '../../assets/property.jpg';
import BlogCard from '../common/BlogCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useBlogContext } from '../../context/blog_context';

function SingleBlog() {
    const { blogs } = useBlogContext();
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("/api/blog/getblog/" + id)
            .then((response) => {
                setBlog(response.data);
                // console.log(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    console.log(blog)

    if (!blog) return "";

    return (
        <div className='flex flex-col gap-10 items-center justify-center mt-10'>
            <div className='flex flex-col items-center justify-center text-center gap-7 w-[60%]'>
                <div className='text-[30px] font-semibold'>{blog[0]?.title}</div>

                <div className='flex flex-row gap-4 items-center justify-start text-[20px]'>
                    <span className='text-[40px]'>
                        <BsPersonCircle />
                    </span>
                    <span className=''>Utsav Vasoya</span>
                    <span>January 16, 2020</span>
                </div>

                <div>
                    {blog[0]?.images && blog[0]?.images.length > 0 && (
                        <img className='rounded-[30px]' src={blog[0]?.images[0]} alt='' />
                    )}
                </div>

                <div>{blog[0]?.description1}</div>

                <div>{blog[0]?.description2}</div>
            </div>

            <div className='flex flex-col items-center justify-center gap-10 mt-20'>
                <div className='text-[40px] font-semibold'>Recently Posts</div>

                <div className='flex flex-row gap-10'>
                    {blogs && blogs.map((data, i) => {
                        if (i >= 3) return "";
                        return (
                            <BlogCard id={data?._id} photo={data?.images[0]} blogType={data?.blogType} title={data?.title} des1={data?.description1} des2={data?.description2} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
