import React, { useState } from 'react'
import { useFilterContext } from '../../context/filter_context';
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

function GlobalHeroFilter() {
  const { filters: { text, category, minBed, maxBed, minBath, maxBath, minPrice, maxPrice, minArea, maxArea, gatedSecurity, lift, parking, water, veg, pets }, updateFilters, clearFilter } = useFilterContext();
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  function handleActive(num) {
    if (num === 0) {
      setActive1(!active1);
      setActive2(false);
      setActive3(false);
      setActive4(false);
    } else if (num === 1) {
      setActive2(!active2);
      setActive1(false);
      setActive3(false);
      setActive4(false);
    } else if (num === 2) {
      setActive3(!active3);
      setActive1(false);
      setActive2(false);
      setActive4(false);
    } else {
      setActive4(!active4);
      setActive1(false);
      setActive2(false);
      setActive3(false);
    }
  }

  // console.log(minBath, maxBath);
  // console.log("Gated Security: ", gatedSecurity);

  return (
    <div className='flex flex-col gap-4 bg-white text-black opacity-100 px-7 py-7 rounded-2xl z-10'>

      <div>
        <div className='flex flex-row gap-4 items-center justify-between text-lg'>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input onChange={updateFilters} name="text" value={text} className='w-[110%] px-4 py-2 text-gray-500 border-2' type="text" placeholder='Search keywords' />
          </form>

          <select name='category' value={category} onChange={updateFilters} id="countries" className=" border-2 border-black text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2">
            <option value="All" selected>Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
          </select>

          <div className='relative text-center border-2 border-black text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] px-4 py-2'>
            <button className='flex flex-row gap-2 items-center justify-center' onClick={() => handleActive(0)}>
              Bedrooms <span>{active1 === true ? <BsChevronDown /> : <BsChevronRight />}</span>
            </button>

            <div className={`top-[50px] left-[0px] bg-white absolute shadow-2xl rounded-lg ${active1 ? "" : "hidden"} `}>
              <div className={`rounded-lg p-4 shadow-xl  grid grid-cols gap-3 items-center`}>
                <div className='flex flex-row gap-2'>
                  <div className=''>
                    <label htmlFor="minBed">Min Bed</label>
                    <input name='minBed' value={minBed} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type='number' placeholder='Min-Bed' />
                  </div>
                  <div>
                    <label htmlFor="maxBed">Max Bed</label>
                    <input name='maxBed' value={maxBed} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type="number" placeholder='Max-Bed' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='relative text-center border-2 border-black text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] px-4 py-2'>
            <button className='flex flex-row gap-2 items-center justify-center' onClick={() => handleActive(2)}>
              Bathrooms <span>{active3 === true ? <BsChevronDown /> : <BsChevronRight />}</span>
            </button>

            <div className={`top-[50px] left-[0px] bg-white absolute shadow-2xl rounded-lg ${active3 ? "" : "hidden"} `}>
              <div className={`rounded-lg p-4 shadow-xl  grid grid-cols gap-3 items-center`}>
                <div className='flex flex-row gap-2'>
                  <div className=''>
                    <label htmlFor="minBath">Min Bath</label>
                    <input name='minBath' value={minBath} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type='number' placeholder='Min-Bath' />
                  </div>
                  <div>
                    <label htmlFor="maxBath">Max Bath</label>
                    <input name='maxBath' value={maxBath} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type="number" placeholder='Max-Bath' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[150px] relative text-center border-2 border-black text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2'>
            <button className='flex text-center flex-row gap-2 items-center justify-center' onClick={() => handleActive(1)}>
              Price <span>{active2 === true ? <BsChevronDown /> : <BsChevronRight />}</span>
            </button>

            <div className={`top-[50px] left-[0px] bg-white absolute shadow-2xl rounded-lg  ${active2 ? "" : "hidden"} `}>
              <div className={`rounded-lg p-4 shadow-xl  grid grid-cols gap-3 items-center`}>
                <div className='flex flex-row gap-2'>
                  <div className=''>
                    <input name='minPrice' value={minPrice} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type='number' placeholder='Min-Price' />
                  </div>
                  <div>
                    <input name='maxPrice' value={maxPrice} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type="number" placeholder='Max-Price' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='flex flex-row gap-5 items-center'>
        <div className='w-[150px] relative text-center border-2 border-black text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2'>
          <button className='flex text-center flex-row gap-2 items-center justify-center' onClick={() => handleActive(4)}>
            Area (sqft) <span> {active4 === true ? <BsChevronDown /> : <BsChevronRight />} </span>
          </button>

          <div className={`top-[50px] left-[0px] bg-white absolute shadow-2xl rounded-lg  ${active4 ? "" : "hidden"} `}>
            <div className={`rounded-lg p-4 shadow-xl  grid grid-cols gap-3 items-center`}>
              <div className='flex flex-row gap-2'>
                <div className=''>
                  <input name='minArea' value={minArea} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type='number' placeholder='Min-Area' />
                </div>
                <div>
                  <input name='maxArea' value={maxArea} onChange={updateFilters} className='w-[150px] px-4 py-2 border-2 border-black rounded-lg' type="number" placeholder='Max-Area' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-center justify-between gap-4 text-black'>
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor="gatedSecurity"> Gated Security: </label>
            <input name='gatedSecurity' value={gatedSecurity} type="checkbox" checked={gatedSecurity} onChange={updateFilters} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor="lift">  Lift: </label>
            <input name='lift' value={lift} type="checkbox" checked={lift} onChange={updateFilters} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor="parking"> Parking: </label>
            <input name='parking' value={parking} type="checkbox" checked={parking} onChange={updateFilters} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor="water">  Water Supply </label>
            <input name='water' value={water} type="checkbox" checked={water} onChange={updateFilters} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor="veg">  Veg / Non-veg </label>
            <input name='veg' value={veg} type="checkbox" checked={veg} onChange={updateFilters} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor="pets"> Pets: </label>
            <input name='pets' value={pets} type="checkbox" checked={pets} onChange={updateFilters} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
          </div>
        </div>

        <button className='bg-one px-10 py-2' onClick={clearFilter}>
          Clear Filtters
        </button>
      </div>
    </div>

  )
}

export default GlobalHeroFilter