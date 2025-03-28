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
			value: "Deep Work",
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
            <div className={`${openSetting ? '' : 'hidden'} max-w-xl bg-[#FAFAFA] absolute text-[#665442] sm:w-96 w-11/12 left-1/2 top-1/2 rounded-md p-5`} style={{
                transform: 'translate(-50%, -50%)',
            }}>
                <div className='flex items-center justify-between'>
                    <h2 className='text-1xl uppercase font-bold tracking-wider'>
                        Time Setting
                    </h2>
                    <IoCloseCircleOutline className='text-2xl cursor-pointer text-[#665442]' onClick={() => setOpenSetting(false)} />
                </div>
                <div className='h-[1.5px] w-full bg-[#665442] my-5'></div>
                <div className='flex gap-5'>
                    {
                        inputs.map((input, index) => {
                            return (
                                <div key={index}>
                                    <h2 className='text-[#665442] text-sm py-2 text-center'>{input.value}</h2>
                                    <input
                                        defaultValue={input.defaultValue}
                                        type='text'
                                        className='w-full bg-transparent border text-[#6A5842] border-[#665442] py-2 rounded outline-none text-center'
                                        ref={input.ref}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <button className='text-[#634F4F] bg-[#F0E4D6] uppercase rounded w-full mt-5 py-2 px-2 font-semibold' onClick={updateTimeDefaultValue}>
                    save
                </button>
            </div>
        </>
    )
}

export default React.memo(ModalSettings);