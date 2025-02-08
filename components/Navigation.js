import React from 'react'
import { TbSettings2 } from "react-icons/tb"
import { MdAccessAlarm } from "react-icons/md";

const Navigation = ({ setOpenSetting }) => {
    return (
        <nav className='pt-5 text-[#474747] flex justify-between items-center w-11/12 mx-auto font-semibold'>
            <div className='flex items-center gap-2 cursor-pointer text-2xl'>
                <MdAccessAlarm />
                <h1>
                    DeepFocus
                </h1>
            </div>
            <TbSettings2 className='text-2xl cursor-pointer' onClick={() => setOpenSetting((value) => !value)} />
        </nav>
    )
}

export default React.memo(Navigation);