import React from 'react'
import CommonHero from "../common/CommonHero";
import { Link } from 'react-router-dom';

function Services() {
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
      id: 3,
      img: "/assets/images/service/3/1.jpg",
      title: "Guest House Management",
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
    {
      id: 6,
      img: "/assets/images/service/6/1.jpg",
      title: "Property Maintenance Assistance",
    },
    {
      id: 7,
      img: "/assets/images/service/7/1.jpg",
      title: "Renovation Services",
    },
    {
      id: 8,
      img: "/assets/images/service/8/1.jpg",
      title: "Kitchen Cleaning",
    },
    {
      id: 9,
      img: "/assets/images/service/9/1.jpg",
      title: "Tank Cleaning",
    },
  ];

  return (
    <div className='items-center justify-center'>
      <CommonHero subTitle={"Home / Services"} title={"Services"} />

      <div className='flex flex-col items-center justify-center mt-20'>

        <div className='w-[80%] grid grid-cols-3 gap-10'>
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
    </div>
  )
}

export default Services