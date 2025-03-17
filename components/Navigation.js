import React from 'react'
import { TbSettings2 } from "react-icons/tb"
import { LiaColumnsSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Link from 'next/link';
import { PiTimer } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";
import { BsChatQuote } from "react-icons/bs";

const Navigation = ({ setOpenSetting, setIsOpen, isOpen }) => {

    return (
        <>
            <nav className='pt-5 text-[#0C0C0C] flex justify-end items-center mx-auto font-semibold'>
                <button
                    className="p-2 m-4 text-[#0C0C0C] fixed z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <LiaColumnsSolid size={28} /> : <LiaColumnsSolid size={28} />}
                </button>
            </nav>

            <div className="relative">
                {/* Sidebar */}
                <motion.aside
                    initial={{ x: "-100%" }}
                    animate={{ x: isOpen ? 15 : "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-10 left-0 h-[80vh] w-56 bg-[#0C0C0C] shadow-2xl p-6 rounded-2xl"
                >
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="h-10 w-10 text-[#0C0C0C] bg-[#E8E8E8] flex items-center justify-center rounded-lg font-bold">
                            <h1 className='font-semibold text-2xl'>P</h1>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold uppercase text-[#E8E8E8]">Pomo</h2>
                        </div>
                    </div>

                    <nav>
                        <h3 className="text-sm font-semibold text-[#E8E8E8] mb-2">General</h3>
                        <ul className="space-y-4 mb-6">
                            <Link href='/'>
                                <li className="flex items-center p-2 space-x-2 text-[#E8E8E8] rounded-md cursor-pointer">
                                    <PiTimer size={20} className='text-[#727272]' /> <span>Timer</span>
                                </li>
                            </Link>
                            {/* <Link href='/todo'>
                                <li className="flex items-center p-2 space-x-2 text-[#E8E8E8] rounded-md cursor-pointer">
                                    <LuListTodo size={20} className='text-[#727272]' /> <span>Tasks</span>
                                </li>
                            </Link>
                            <Link href='/quote'>
                                <li className="flex items-center p-2 space-x-2 text-[#E8E8E8] rounded-md cursor-pointer">
                                    <BsChatQuote size={20} className='text-[#727272]' /> <span>Quotes</span>
                                </li>
                            </Link> */}
                        </ul>

                        <h3 className="text-sm font-semibold text-[#E8E8E8] mb-2">Settings</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center p-2 space-x-2 text-[#E8E8E8] rounded-md cursor-pointer"
                                onClick={() => setOpenSetting((value) => !value)}>
                                <TbSettings2 size={18} className='text-[#727272]' /> <span>General</span>
                            </li>
                        </ul>
                    </nav>
                </motion.aside>
            </div>
        </>
    )
}

export default React.memo(Navigation);