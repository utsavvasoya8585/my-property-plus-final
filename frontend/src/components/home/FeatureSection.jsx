import React from 'react'
import GridCard from '../common/GridCard'
import { usePropertyContext } from '../../context/property_context'

function FeatureSection() {
  const { features } = usePropertyContext();

  console.log("features", features);
  return (
    <div className='flex flex-col items-center justify-center pb-10 pt-10'>
      <div className='text-[40px] font-medium'>Featured Properties</div>

      <div className='text-[20px] pb-16'>Handpicked Properties by our team</div>

      <div className='flex flex-row gap-10'>
        {features && features.map((data, i) => {
          return (
            <GridCard id={data?._id} photo={data?.images[0]} catagory={data?.category} name={data?.name} address={data?.address} bedrooms={data?.bedrooms} bathrooms={data?.bathrooms} propertySize={data?.propertySize} date={data?.date} />
          )
        })}
      </div>
    </div>
  )
}

export default FeatureSection