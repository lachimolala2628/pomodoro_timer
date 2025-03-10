import React from 'react'
import { TbSettings2 } from "react-icons/tb"
import { MdAccessAlarm } from "react-icons/md";
import { LiaColumnsSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Link from 'next/link';
import { PiTimer } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";

const Navigation = ({ setOpenSetting, setIsOpen, isOpen }) => {

    return (
        <>
            <nav className='pt-5 text-[#18181B] flex justify-end items-center mx-auto font-semibold'>
                <button
                    className="p-2 m-4 text-[#18181B] fixed z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <LiaColumnsSolid size={28} /> : <LiaColumnsSolid size={28} />}
                </button>
            </nav>

            <div className="relative">
                {/* Sidebar */}
                <motion.aside
                    initial={{ x: "-100%" }}
                    animate={{ x: isOpen ? 20 : "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-10 left-0 h-[80vh] w-56 bg-[#FAFAFA] text-[#18181B] shadow-lg p-6 rounded-2xl"
                >
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="h-10 w-10 bg-black text-white flex items-center justify-center rounded-lg font-bold">
                            <MdAccessAlarm size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">DeepFocus</h2>
                        </div>
                    </div>

                    <nav>
                        <h3 className="text-sm font-semibold text-[#18181B] mb-2">General</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-center p-2 space-x-2 text-[#18181B] rounded-md hover:bg-gray-100 cursor-pointer">
                                <PiTimer size={20} className='text-gray-500' /> <span>Timer</span>
                            </li>
                            {/* <Link href='/todo'>
                                <li className="flex items-center p-2 space-x-2 text-[#18181B] rounded-md hover:bg-gray-100 cursor-pointer">
                                    <LuListTodo size={20} className='text-gray-500' /> <span>Tasks</span>
                                </li>
                            </Link> */}
                        </ul>

                        <h3 className="text-sm font-semibold text-[#18181B] mb-2">Settings</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center p-2 space-x-2 text-[#18181B] rounded-md hover:bg-gray-100 cursor-pointer"
                                onClick={() => setOpenSetting((value) => !value)}>
                                <TbSettings2 size={18} className='text-gray-500' /> <span>General</span>
                            </li>
                        </ul>
                    </nav>
                </motion.aside>
            </div>
        </>
    )
}

export default React.memo(Navigation);