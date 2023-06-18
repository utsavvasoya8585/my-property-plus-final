import React, { useState } from 'react'

function GlobalHeroFilter() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  return (
    <div className='flex flex-col gap-4 bg-white text-black opacity-100 px-7 py-7 rounded-2xl'>
      <div className='flex flex-row gap-2'>
        <button className='border-2 border-two px-3 py-2 rounded-md'>Buy</button>
        <button className='border-2 border-two px-3 py-2 rounded-md'>Rent</button>
      </div>

      <div>
        <div className='flex flex-row gap-4 items-center justify-center text-2xl'>
          <input className=' px-4 py-2 text-gray-500 border-2' type="text" placeholder='Search keywords' />
          
          <div className='relative'>
            <div onClick={() => setActive1(!active1)} className='cursor-pointer'>Select type</div>
            <ul className={`flex flex-col absolute bg-white p-4 ${active1 ? "static" : "hidden"}`}>
              <li className='flex flex-col'>
                Villa
              </li>

              <li className='flex flex-col'>
                Apartment
              </li>
            </ul>
          </div>

          <div className='relative'>
            <div onClick={() => setActive2(!active2)} className='cursor-pointer'>Select Bed & Bath</div>
            <ul className={`flex flex-col absolute bg-white p-4 ${active2 ? "static" : "hidden"}`}>
              <li className='flex flex-col'>
                <span>Bedrooms</span>
                <ul className='flex flex-row gap-4'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </li>

              <li className='flex flex-col'>
                <span>Bathrooms</span>
                <ul className='flex flex-row gap-4'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='relative'>
            <div onClick={() => setActive3(!active3)} className='cursor-pointer'>Price</div>
            <ul className={`flex flex-col absolute bg-white p-4 ${active3 ? "static" : "hidden"}`}>
              <input className=' px-4 py-2 text-gray-500 border-2' type="text" placeholder='Min Price' />
              <input className=' px-4 py-2 text-gray-500 border-2' type="text" placeholder='Max Price' />
            </ul>
          </div>

          <div>
            <button className='bg-one px-4 py-2'>
              Search
            </button>
          </div>

        </div>
      </div>
      <div></div>
    </div>

  )
}

export default GlobalHeroFilter