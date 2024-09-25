import {useState} from 'react'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';
import { Link } from 'react-router-dom';
import TimeSlider from './components/TimeSlider';

function CreateRide() {
    const [state, setState] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
  
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center my-4 py-2'>
                <Link to={'/'}>
                    <img src="./icons/back-vector.png" alt="Go Back" />
                </Link>
                <p className='text-[#FF0000] fontSuperRetroItalic'>Create new ride</p>
                <img src="./icons/wheel-menu.png" alt="Go Back" />
            </div>

            <form action="vehicles">
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
                    <div className='flex justify-around items-center mb-2'>
                        <TimeSlider title="START" />
                        <span className='border-l border-[#B2B2B2] h-20'></span>
                        <TimeSlider title="END" />
                    </div>
                </div>
                <div className='rounded-2xl border border-[#00000033] mt-5 p-4'>
                    <p className='text-lg'><span className='font-bold'>or Book Instantly -</span> starting now ⚡️</p>
                    <div className='flex justify-between mt-5'>
                        <label className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>
                            <span>3hrs</span>
                            <input type="radio" name="hours" className='hidden' />
                        </label>
                        <label className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>
                            <span>6hrs</span>
                            <input type="radio" name="hours" className='hidden' />
                        </label>
                        <label className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>
                            <span>12hrs</span>
                            <input type="radio" name="hours" className='hidden' />
                        </label>
                        <label className='bg-[#FF601C33] rounded-xl text-lg font-semibold text-[#FF601C] px-5 py-2'>
                            <span>24hrs</span>
                            <input type="radio" name="hours" className='hidden' />
                        </label>
                    </div>
                </div>
                <button type='submit' className='flex justify-between items-center p-6 fixed left-0 bottom-0 w-full rounded-t-2xl bg-[#FF0000]'>
                    <p className='text-white fontSuperRetroItalic'>Proceed</p>
                    <img src="./icons/proceed-arrow.png" alt="Proceed" />
                </button>
            </form>
        </div>
    )
}

export default CreateRide