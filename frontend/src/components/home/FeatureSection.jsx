import React from 'react'
import GridCard from '../common/GridCard'

function FeatureSection() {
  return (
    <div className='flex flex-col items-center justify-center pb-10 pt-10'>
        <div className='text-[40px] font-medium'>Featured Properties</div>

        <div className='text-[20px] pb-16'>Handpicked Properties by our team</div>

        <div className='flex flex-row gap-10'>
            <GridCard />
            <GridCard />
            <GridCard />
        </div>
    </div>
  )
}

export default FeatureSection