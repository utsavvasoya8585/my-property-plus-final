import React from 'react'
import photo from "../../assets/inner-page.jpg"
import GlobalHeroFilter from '../common/GlobalHeroFilter'
import GridCard from "../common/GridCard";
import { useFilterContext } from '../../context/filter_context';

function Properties() {
  const { filter_property } = useFilterContext();

  // console.log("Hi: ", filter_property);

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='z-10 flex w-[100%] flex-col items-center justify-center px-32 pt-60 pb-32 text-white' style={{ backgroundImage: `url(${photo})`, backgroundSize: "cover", overflow: "hidden" }}>
        <GlobalHeroFilter />
      </div>

      <div className='z-0 grid grid-cols-3 items-center justify-center gap-10 '>
        {filter_property && filter_property.map((data, i) => {
          return (
            <GridCard id={data?._id} photo={data?.images[0]} catagory={data?.category} name={data?.name} address={data?.address} bedrooms={data?.bedrooms} bathrooms={data?.bathrooms} propertySize={data?.propertySize} date={data?.date} />
          )
        })}
      </div>
    </div>
  )
}

export default Properties