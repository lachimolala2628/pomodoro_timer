import React from 'react'
import { GoMute } from "react-icons/go";
import { BsArrowRepeat } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";

const Timer = ({ stage, switchStage, getTickingTime, seconds, ticking, startTimer, isTimeUp, muteAlarm, reset }) => {

    const options = ['Work', 'Break']

    return (
        <div className='w-11/12 mx-auto text-[#6A5842] flex flex-col justify-center items-center font-semibold'>
            <div className='flex gap-5 sm:gap-10 items-center'>
                {
                    options.map((options, index) => {
                        return (
                            <h1 key={index} className={` ${index === stage ? 'text-[#6A5842] bg-[#F5EBE0]' : ''} px-14 sm:px-16 py-1 text-sm cursor-pointer transition-all rounded`} onClick={() => switchStage(index)}>
                                {options}
                            </h1>
                        )
                    })
                }
            </div>
            <div className='my-12'>
                <h1 className='text-9xl sm:text-[160px] font-bold select-none m-0 text-[#665442]'>
                    {getTickingTime()}:{seconds.toString().padStart(2, '0')}
                </h1>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <button className='px-36 sm:px-44 py-2 text-2xl rounded-md text-[#634F4F] bg-[#F5EBE0] font-bold' onClick={startTimer}>
                    {ticking ? <BsPause /> : <CiPlay1 />}
                </button>
                {isTimeUp && (
                    <GoMute
                        className="text-4xl cursor-pointer rounded-md text-[#0C0C0C] py-2"
                        onClick={muteAlarm}
                    />
                )}
            </div>
            {
                ticking && (
                    <button onClick={reset} className='rounded-md text-[#0C0C0C] mt-5 py-2 text-2xl font-bold'>
                        <BsArrowRepeat size={20} />
                    </button>
                )
            }
        </div>
    )
}

export default Timer