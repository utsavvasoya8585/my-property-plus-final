import React from 'react'

function Features(props) {
    const {features} = props;

    // console.log(features)

    // const features = "security,gate,nice,bye"

    let formattedFeatures = features?.split(',');
    // console.log(formattedFeatures);

    return (
        <div>
            <div className='flex flex-col gap-7 border-2 border-gray-300 rounded-[30px] px-10 py-5'>
                <span className='text-[20px] font-semibold'>
                    Features:
                </span>
                <div className='flex flex-row items-center justify-between'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='flex flex-col gap-3 text-gray-500'>
                            {formattedFeatures && formattedFeatures.map((data, i) => {
                                if (i > formattedFeatures.length / 2 ) return "";
                                return <span>{formattedFeatures[i]}</span>
                            })}
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 text-gray-500'>
                        {formattedFeatures && formattedFeatures.map((data, i) => {
                            if (i <= formattedFeatures.length / 2) return "";
                            return <span>{formattedFeatures[i]}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features