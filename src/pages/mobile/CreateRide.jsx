import {useState} from 'react'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';
import { Link } from 'react-router-dom';

function CreateRide() {
    const [state, setState] = useState([{
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    }]);
  
    return (
        <>
            <div className='w-full'>
                <div className='flex justify-between items-center my-4 py-2'>
                    <Link to={'/'}>
                        <img src="./icons/back-vector.png" alt="Go Back" />
                    </Link>
                    <p className='text-[#FF0000] fontSuperRetroItalic'>Create new ride</p>
                    <img src="./icons/wheel-menu.png" alt="Go Back" />
                </div>

                <div className='w-full border border-[#CCCCCC] rounded-2xl'>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        className='p-2 ml-2 mt-2'
                    />
                    <hr className='w-11/12 border-[#CCCCCC] m-auto' />
                    <div className='flex justify-between items-center p-4'>
                        <p className='text-lg font-bold'>Select timing</p>
                        <p className='text-xs font-light'>*Office Timings: 10AM - 10PM</p>
                    </div>
                    <div className='flex justify-around items-center mb-3'>
                        <div>
                            <p className='text-sm font-semibold'>START</p>
                            <div className='mt-2 overflow-y-auto'>
                                <p className='text-center text-sm text-[#B2B2B2]'>10:00</p>
                                <p className='text-center border-y border-[#4D4D4D]'>10:30</p>
                                <p className='text-center text-sm text-[#B2B2B2]'>11:00</p>
                            </div>
                        </div>
                        <div className='border-l border-[#B2B2B2] h-20'></div>
                        <div>
                            <p className='text-sm font-semibold'>END</p>
                            <div className='mt-2 overflow-y-auto'>
                                <p className='text-center text-sm text-[#B2B2B2]'>12:00</p>
                                <p className='text-center border-y border-[#4D4D4D]'>12:30</p>
                                <p className='text-center text-sm text-[#B2B2B2]'>01:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl border border-[#00000033] mt-5 p-4'>
                    <p className='text-lg'><span className='font-bold'>or Book Instantly -</span> starting now ⚡️</p>
                    <div className='flex justify-between mt-5'>
                        <button className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>3hrs</button>
                        <button className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>6hrs</button>
                        <button className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>12hrs</button>
                        <button className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>24hrs</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center p-6 fixed left-0 bottom-0 w-full rounded-t-2xl bg-[#FF0000]'>
                <p className='text-white fontSuperRetroItalic'>Proceed</p>
                <img src="./icons/proceed-arrow.png" alt="Proceed" />
            </div>
        </>
    )
}

export default CreateRide