import React from 'react'

const HeroBg = (props) => {
    const {img} = props;
    return (
        <div className="flex justify-center">
            <img src={`${img}`} className='rounded-md md:w-full object-cover overflow-hidden shadow-md mb-4' />
        </div>
    )
}

export default HeroBg;
