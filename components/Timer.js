import React from 'react'
import { GoMute } from "react-icons/go";
import { BsArrowRepeat } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";

const Timer = ({ stage, switchStage, getTickingTime, seconds, ticking, startTimer, isTimeUp, muteAlarm, reset }) => {

    const options = ['Deep Work', 'Short Break', 'Long Break']

    return (
        <div className='w-11/12 mx-auto pt-5 text-[#18181B] flex flex-col justify-center items-center mt-10 font-semibold'>
            <div className='flex gap-6 items-center'>
                {
                    options.map((options, index) => {
                        return (
                            <h1 key={index} className={` ${index === stage ? 'text-[#FAFAFA] bg-[#18181B]' : ''} px-2 py-1 text-sm cursor-pointer transition-all rounded`} onClick={() => switchStage(index)}>
                                {options}
                            </h1>
                        )
                    })
                }
            </div>
            <div className='my-12'>
                <h1 className='text-9xl font-bold select-none m-0 text-[#18181B]'>
                    {getTickingTime()}:{seconds.toString().padStart(2, '0')}
                </h1>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <button className='px-36 py-2 text-2xl rounded-md text-[#FAFAFA] bg-[#18181B] font-bold' onClick={startTimer}>
                    {ticking ? <BsPause /> : <CiPlay1 />}
                </button>
                {isTimeUp && (
                    <GoMute
                        className="text-4xl cursor-pointer rounded-md text-[#18181B] bg-[#F2EEE3] py-2"
                        onClick={muteAlarm}
                    />
                )}
            </div>
            {
                ticking && (
                    <button onClick={reset} className='rounded-md text-[#18181B] bg-[#F2EEE3] mt-5 py-2 text-2xl font-bold'>
                        <BsArrowRepeat size={20} />
                    </button>
                )
            }
        </div>
    )
}

export default Timer