import React from 'react'
import photo from "../../assets/inner-page.jpg"
import GlobalHeroFilter from '../common/GlobalHeroFilter'
import GridCard from "../common/GridCard";
import { usePropertyContext } from '../../context/property_context';

function Properties() {
  const { properties } = usePropertyContext();

  console.log(properties);

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex w-[100%] flex-col items-center justify-center px-32 pt-60 pb-10 text-white' style={{ backgroundImage: `url(${photo})`, backgroundSize: "cover", overflow: "hidden" }}>
        <GlobalHeroFilter />
      </div>

      <div className='grid grid-cols-3 items-center justify-center gap-10 '>
        {properties && properties.map((data, i) => {
          return (
            <GridCard id={data?._id} photo={data?.images[0]} catagory={data?.category} name={data?.name} address={data?.address} bedrooms={data?.bedrooms} bathrooms={data?.bathrooms} propertySize={data?.propertySize} date={data?.date} />
          )
        })}
      </div>
    </div>
  )
}

export default Properties