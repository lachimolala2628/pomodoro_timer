import React from 'react'
import { GoMute } from "react-icons/go";
import { BsArrowRepeat } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";

const Timer = ({ stage, switchStage, getTickingTime, seconds, ticking, startTimer, isTimeUp, muteAlarm, reset }) => {

    const options = ['Deep Focus', 'Short Break', 'Long Break']

    return (
        <div className='w-11/12 mx-auto pt-5 text-[#18181B] flex flex-col justify-center items-center mt-10 font-semibold'>
            <div className='flex gap-6 items-center'>
                {
                    options.map((options, index) => {
                        return (
                            <h1 key={index} className={` ${index === stage ? 'text-[#FAFAFA] bg-[#18181B]' : ''} px-3 py-1 cursor-pointer transition-all rounded`} onClick={() => switchStage(index)}>
                                {options}
                            </h1>
                        )
                    })
                }
            </div>
            <div className='my-16'>
                <h1 className='text-9xl font-bold select-none m-0 text-[#18181B]'>
                    {getTickingTime()}:{seconds.toString().padStart(2, '0')}
                </h1>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='px-16 py-2 text-2xl rounded-md text-[#FAFAFA] tracking-widest bg-[#18181B] font-bold' onClick={startTimer}>
                    {ticking ? <BsPause /> : <CiPlay1 />}
                </button>
                {isTimeUp && (
                    <GoMute
                        className="text-3xl cursor-pointer rounded-md text-[#FAFAFA] bg-[#18181B] py-2 px-2"
                        onClick={muteAlarm}
                    />
                )}
            </div>
            {
                ticking && (
                    <button onClick={reset} className='rounded-md text-[#FAFAFA] tracking-widest bg-[#18181B] mt-5 px-16 py-2 text-2xl font-bold'>
                        <BsArrowRepeat size={20} />
                    </button>
                )
            }
        </div>
    )
}

export default Timer