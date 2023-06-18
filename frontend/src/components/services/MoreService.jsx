import React from 'react'
import { Link } from 'react-router-dom';

function MoreService() {
    const data = [
        {
          id: 1,
          img: "/assets/images/service/1/1.jpg",
          title: "Property Management",
        },
        {
          id: 2,
          img: "/assets/images/service/2/1.jpg",
          title: "Rental Properties Management",
        },
        {
          id: 4,
          img: "/assets/images/service/4/1.jpg",
          title: "Property Buying or Selling",
        },
        {
          id: 5,
          img: "/assets/images/service/5/1.jpg",
          title: "Residental Plot Management",
        },
      ];

  return (
    <div className='flex flex-col items-center gap-10 justify-center mt-10 '>
        <span className='text-[40px] font-semibold'>More Services from Us</span>
        <div className='w-[80%] grid grid-cols-4 gap-10'>
          {data.map((item, i) => {
            return (
              <Link to={`/services/${item.id}`} className='shadow-xl hover:shadow-2xl p-4 flex flex-col items-center gap-4 rounded-[30px] cursor-pointer duration-500'>
                <img className='h-[200px] w-[300px] object-cover rounded-[30px]' src={item.img} alt="" />
                <span className='text-[20px] font-semibold'>{item.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
  )
}

export default MoreService