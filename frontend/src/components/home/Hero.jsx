import React from 'react'
import hero from "../../assets/hero.jpg";
import GlobalHeroFilter from "../common/GlobalHeroFilter"

function Hero() {
  return (
    <div className='h-screen' style={{backgroundImage: {hero}}}>
        <div className="flex flex-col z-10 text-white pt-60 items-center justify-center gap-10" style={{backgroundImage: `url(${hero})`}} >
            <div className="text-center">
                <h2 className="text-[60px] font-bold">Find Your Dream Home</h2>
                <p className="text-[20px]">
                    From as low as ₹1000 per day with limited time offer discounts.
                </p>
            </div>
            {/* End .home-text */}
            <div className='pb-32'>
                <GlobalHeroFilter />
            </div>
        </div>
    </div>
  )
}

export default Hero