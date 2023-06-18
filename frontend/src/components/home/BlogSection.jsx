import React from 'react'
import GridCard from '../common/GridCard'
import BlogCard from '../common/BlogCard'
import { useBlogContext } from '../../context/blog_context';

function BlogSection() {
  const { blogs } = useBlogContext();

  return (
    <div className='flex flex-col items-center justify-center pb-10 pt-20'>
      <div className='text-[40px] font-medium pb-10'>Blogs, Articles & Tips</div>

      <div className='flex flex-row gap-10'>
        {blogs && blogs.map((data, i) => {
          if(i>=3) return ""; 
          return (
            <BlogCard id={data?._id} photo={data?.images[0]} blogType={data?.blogType} title={data?.title} des1={data?.description1} des2={data?.description2} />
          )
        })}
      </div>
    </div>
  )
}

export default BlogSection