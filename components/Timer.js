import React from 'react'
import { GoMute } from "react-icons/go";

const Timer = ({ stage, switchStage, getTickingTime, seconds, ticking, startTimer, isTimeUp, muteAlarm, reset }) => {

    const options = ['Pomodoro', 'Short Break', 'Long Break']

    return (
        <div className='w-10/12 mx-auto pt-5 text-[#EA2129] flex flex-col justify-center items-center mt-10 font-semibold'>
            <div className='flex gap-6 items-center'>
                {
                    options.map((options, index) => {
                        return (
                            <h1 key={index} className={` ${index === stage ? 'bg-[#000000] text-[#ffffff]' : ''} p-1 cursor-pointer transition-all rounded text-[#000000]`} onClick={() => switchStage(index)}>
                                {options}
                            </h1>
                        )
                    })
                }
            </div>
            <div className='mt-12 mb-16'>
                <h1 className='text-9xl font-bold select-none m-0'>
                    {getTickingTime()}:{seconds.toString().padStart(2, '0')}
                </h1>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='px-16 py-2 text-2xl rounded-md text-[#ffffff] bg-[#000000] uppercase font-bold' onClick={startTimer}>
                    {ticking ? "Stop" : "Start"}
                </button>
                {isTimeUp && (
                    <GoMute
                        className="text-3xl cursor-pointer rounded-md text-[#ffffff] bg-[#000000] py-2 px-2"
                        onClick={muteAlarm}
                    />
                )}
            </div>
            {
                ticking && (
                    <button onClick={reset} className='uppercase rounded-md text-[#ffffff] bg-[#000000] mt-5 px-16 py-2 text-2xl font-bold'>
                        reset
                    </button>
                )
            }
        </div>
    )
}

export default Timer