import React from 'react'

function Details(props) {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-7 border-2 border-gray-300 rounded-[30px] px-10 py-5'>
                <span className='text-[20px] font-semibold'>
                    property Details
                </span>
                <div className='flex flex-row items-center justify-between'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='flex flex-col gap-3 text-gray-500'>
                            <span>Property Type: </span>
                            <span>Floor: </span>
                            <span>No. of Rooms: </span>
                            <span>No. of Bathrooms: </span>
                            <span>Furnishing status: </span>
                            <span>Power Supply: </span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span>{props?.category} </span>
                            <span>{props?.floor} </span>
                            <span>{props?.bedrooms} </span>
                            <span>{props?.bathrooms} </span>
                            <span>{props?.fStatus} </span>
                            <span>Yes </span>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-3'>
                        <div className='flex flex-col gap-3 text-gray-500'>
                            <span>Water Supply: </span>
                            <span>Car Parking Facility: </span>
                            <span>Lift: </span>
                            <span>Gated Security: </span>
                            <span>Fire Safity: </span>
                            <span>Pets: </span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span>{!props?.water ? "No" : "Yes"} </span>
                            <span>{!props?.parking ? "No" : "Yes"} </span>
                            <span>{!props?.lift ? "No" : "Yes"} </span>
                            <span>{!props?.gatedSecurity ? "No" : "Yes"} </span>
                            <span>{"Yes"} </span>
                            <span>{!props?.pets ? "No" : "Yes"} </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-7 border-2 border-gray-300 rounded-[30px] px-10 py-5'>
                <div className='flex flex-col gap-7 '>
                    <span className='text-[20px] font-semibold'>
                        Near by Bus Stop & Railway Station
                    </span>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col gap-3 text-gray-500'>
                                <span>Anand Theatre Bus Stop: </span>
                                <span>Thousand Lights Bus Stop: </span>
                                <span>Thousand Lights Metro Rail Station: </span>
                                <span>Egmore Railway Station: </span>
                                <span>Nungambakkam Railway Station: </span>
                                <span>Kodambakkam Railway Station : </span>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <span>350 Meters </span>
                                <span>550 Meters </span>
                                <span>550 Meters </span>
                                <span>3 km </span>
                                <span>3.5 km </span>
                                <span>3.5 km </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-7 '>
                    <span className='text-[20px] font-semibold'>
                    Near by Shop & Restaurant
                    </span>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col gap-3 text-gray-500'>
                                <span>Anand Theatre Bus Stop: </span>
                                <span>Thousand Lights Bus Stop: </span>
                                <span>Thousand Lights Metro Rail Station: </span>
                                <span>Egmore Railway Station: </span>
                                <span>Nungambakkam Railway Station: </span>
                                <span>Kodambakkam Railway Station : </span>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <span>350 Meters </span>
                                <span>550 Meters </span>
                                <span>550 Meters </span>
                                <span>3 km </span>
                                <span>3.5 km </span>
                                <span>3.5 km </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-7 '>
                    <span className='text-[20px] font-semibold'>
                    Near by Medical Shop & Entertainment Place
                    </span>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col gap-3 text-gray-500'>
                                <span>Anand Theatre Bus Stop: </span>
                                <span>Thousand Lights Bus Stop: </span>
                                <span>Thousand Lights Metro Rail Station: </span>
                                <span>Egmore Railway Station: </span>
                                <span>Nungambakkam Railway Station: </span>
                                <span>Kodambakkam Railway Station : </span>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <span>350 Meters </span>
                                <span>550 Meters </span>
                                <span>550 Meters </span>
                                <span>3 km </span>
                                <span>3.5 km </span>
                                <span>3.5 km </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Details