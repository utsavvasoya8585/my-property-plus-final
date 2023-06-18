import React from 'react';
import BlogCard from "../common/BlogCard";
import CommonHero from '../common/CommonHero';
import { useBlogContext } from '../../context/blog_context';

function Blogs() {
  const { blogs } = useBlogContext();

  console.log(blogs)
  return (
    <div>
      <div> <CommonHero subTitle={"Home / Blogs"} title={"Blogs"} /> </div>

      <div className='flex flex-col items-center justify-center mt-20'>

        <div className='grid grid-cols-3 gap-10'>
          {blogs && blogs.map((data, i) => {
            return (
              <BlogCard id={data?._id} photo={data?.images[0]} blogType={data?.blogType} title={data?.title} des1={data?.description1} des2={data?.description2} />
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Blogs