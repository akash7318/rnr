import React from 'react'
import { Link } from 'react-router-dom'

function Vehicles() {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center my-4 py-2'>
                <Link to={'/createRide'}>
                    <img src="./icons/back-vector.png" alt="Go Back" />
                </Link>
                <p className='text-[#FF0000] fontSuperRetroItalic'>New Ride</p>
                <img src="./icons/wheel-menu.png" alt="Go Back" />
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2 border border-[#00000033] rounded-lg px-3 py-1 bg-white'>
                    <img src="./icons/filter.png" alt="" />
                    <p className='text-xs'>Filters</p>
                    <img src="./icons/filter_down_arrow.png" alt="" />
                </div>
                <div className='flex items-center gap-2 border border-[#00000033] rounded-lg px-3 py-1 bg-white'>
                    <img src="./icons/scooty.png" alt="" />
                    <p className='text-xs'>Scooty</p>
                </div>
                <div className='flex items-center gap-2 border border-[#00000033] rounded-lg px-3 py-1 bg-white'>
                    <img src="./icons/bike.png" alt="" />
                    <p className='text-xs'>Bike</p>
                </div>
            </div>
        </div>
    )
}

export default Vehicles