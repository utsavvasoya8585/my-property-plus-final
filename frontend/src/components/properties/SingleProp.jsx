import React, { useEffect, useState } from 'react'
import PropHero from './PropHero'
import Section1 from './Section1'
import Section2 from './Section2'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SingleProp() {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("/api/property/getproperty/" + id)
            .then((response) => {
                setData(response.data[0]);
                // console.log(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <div className='flex flex-col gap-10 items-center justify-center'>
            <PropHero name={data?.name} address={data?.address} images={data?.images} />
            <Section1 category={data?.category} floor={data?.floor} bedrooms={data?.bedrooms} bathrooms={data?.bathrooms} fStatus={data?.fStatus} water={data?.water} parking={data?.parking} lift={data?.lift} gatedSecurity={data?.gatedSecurity} vParking={data?.vParking} power={data?.power} pets={data?.pets} />
            <Section2 features={data?.features} googleLocation={data?.googleLocation} />
        </div>
    )
}

export default SingleProp