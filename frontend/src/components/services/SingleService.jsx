import React, { useEffect, useState } from 'react'
import ServiceHero from './ServiceHero'
import ServiceAbout from './ServiceAbout'
import MoreService from './MoreService'
import Include from './Include';
import data from "./data";
import { useParams } from 'react-router-dom';

function SingleService() {
    const {id} = useParams();
    const [service, setService] = useState();

    useEffect(() => {
        for(let i=0; i<data.length; i++){
            if(data[i].id == parseInt(id)){
                setService(data[i]);
            }
        }
    }, [id]);
    
  return (
    <div className='flex flex-col items-center gap-10'>
        <ServiceHero title={service?.title} description={service?.description} />
        <ServiceAbout img={service?.img} title={service?.aboutTitle} des={service?.aboutDescription} />
        <MoreService />
        <Include />
    </div>
  )
}

export default SingleService