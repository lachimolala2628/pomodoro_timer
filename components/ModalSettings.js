import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalSettings = ({
    pomodoroRef,
    shortBreakRef,
    longBreakRef,
    openSetting,
    setOpenSetting,
    updateTimeDefaultValue,
}) => {

    const inputs = [
		{
			value: "Pomodoro",
			ref: pomodoroRef,
			defaultValue: 25,
		},
		{
			value: "Short Break",
			ref: shortBreakRef,
			defaultValue: 5,
		},
		{
			value: "Long Break",
			ref: longBreakRef,
			defaultValue: 10,
		},
	];

    return (
        <>
            <div className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${openSetting ? '' : 'hidden'}`} onClick={() => setOpenSetting(false)}>
            </div>
            <div className={`${openSetting ? '' : 'hidden'} max-w-xl text-[#C9C7BA] absolute bg-[#29292B] sm:w-96 w-11/12 left-1/2 top-1/2 rounded-md p-5`} style={{
                transform: 'translate(-50%, -50%)',
            }}>
                <div className='flex items-center justify-between'>
                    <h2 className='text-1xl uppercase font-bold tracking-wider'>
                        Time Setting
                    </h2>
                    <IoCloseCircleOutline className='text-2xl cursor-pointer' onClick={() => setOpenSetting(false)} />
                </div>
                <div className='h-1 w-full bg-[#29292B] my-5'></div>
                <div className='flex gap-5'>
                    {
                        inputs.map((input, index) => {
                            return (
                                <div key={index}>
                                    <h2 className='text-[#C9C7BA] text-sm'>{input.value}</h2>
                                    <input
                                        defaultValue={input.defaultValue}
                                        type='number'
                                        className='w-full bg-transparent border border-[#C9C7BA] py-2 rounded outline-none text-center'
                                        ref={input.ref}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <button className='text-[#29292B] bg-[#C9C7BA] uppercase rounded w-full mt-5 py-2 px-2' onClick={updateTimeDefaultValue}>
                    save
                </button>
            </div>
        </>
    )
}

export default React.memo(ModalSettings);