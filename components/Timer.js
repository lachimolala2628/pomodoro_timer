import React from 'react'

const Timer = () => {

    const options = ['Pomodoro', 'Short Break', 'Long Break']

    return (
        <div className='w-10/12 mx-auto pt-5 text-[#F1FAEE] flex flex-col justify-center items-center mt-10 font-semibold'>
            <div className='flex gap-6 items-center'>
                {
                    options.map((options, index) => {
                        return (
                            <h1 key={index} className={` ${index === 0 ? 'bg-gray-500 bg-opacity-30' : ''} p-1 cursor-pointer transition-all rounded`}>
                                {options}
                            </h1>
                        )
                    })
                }
            </div>
            <div className='mt-12 mb-16'>
                <h1 className='text-9xl font-bold select-none m-0'>
                    20:17
                </h1>
            </div>
            <button className='px-16 py-2 text-2xl rounded-md bg-[#F1FAEE] text-[#111827] uppercase font-bold'>
                Start
            </button>
        </div>
    )
}

export default Timer