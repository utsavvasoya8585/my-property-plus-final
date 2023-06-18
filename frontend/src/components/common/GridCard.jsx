import React from 'react'
import { Link } from "react-router-dom";
import photo from "../../assets/property.jpg"

function GridCard(props) {
    const dateString = props.date;
    const date = new Date(dateString);
    const formattedDate = date.toDateString();

    return (
        <Link to={"/properties/single/"+props.id} className='shadow-xl hover:shadow-2xl duration-500 cursor-pointer p-4 flex flex-col gap-4'>
            <div className='w-[300px]'>
                <img src={props.photo} alt="" />
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-one'>{props?.catagory}</div>
                <div className='font-bold'>{props?.name}</div>
                <div className='text-gray-500'>{props?.address}</div>
                <div className='pb-2 text-gray-500'>Beds: {props?.bedrooms} {" "} Baths: {props?.bathrooms} {" "} sqft: {props?.propertySize} </div>
                <hr />
                <div className='pt-2 font-bold flex flex-row items-center justify-between'>
                    <span>Utsav Vasoya</span>
                    <span>{formattedDate}</span>
                </div>
            </div>
        </Link>
    )
}

export default GridCard