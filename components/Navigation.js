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
            <nav className='pt-5 text-[#665442] flex justify-end items-center mx-auto font-semibold'>
                <button
                    className="p-2 m-4 text-[#665442] fixed z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <LiaColumnsSolid size={28} /> : <LiaColumnsSolid size={28} />}
                </button>
            </nav>

            <div className="relative">
                {/* Sidebar */}
                <motion.aside
                    initial={{ x: "-100%" }}
                    animate={{ x: isOpen ? 10 : "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-10 left-0 h-[90vh] w-56 bg-[#F5EBE0] shadow-xl p-6 rounded-xl"
                >
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="h-10 w-10 text-[#FAFAFA] bg-[#18181B] flex items-center justify-center rounded-lg font-bold">
                            <h1 className='font-semibold text-2xl'>P</h1>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold uppercase text-[#665442]">Pomo</h2>
                        </div>
                    </div>

                    <nav>
                        <h3 className="text-sm font-bold text-[#665442] mb-2">General</h3>
                        <ul className="space-y-4 mb-6">
                            <Link href='/'>
                                <li className="flex items-center p-2 space-x-2 text-[#6A5842] rounded-md cursor-pointer">
                                    <PiTimer size={20} className='text-[#6A5842]' /> <span>Timer</span>
                                </li>
                            </Link>
                            <Link href='/todo'>
                                <li className="flex items-center p-2 space-x-2 text-[#6A5842] rounded-md cursor-pointer">
                                    <LuListTodo size={20} className='text-[#6A5842]' /> <span>Tasks</span>
                                </li>
                            </Link>
                            <Link href='/quote'>
                                <li className="flex items-center p-2 space-x-2 text-[#6A5842] rounded-md cursor-pointer">
                                    <BsChatQuote size={20} className='text-[#6A5842]' /> <span>Quotes</span>
                                </li>
                            </Link>
                        </ul>

                        <h3 className="text-sm font-bold text-[#665442] mb-2">Settings</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center p-2 space-x-2 text-[#6A5842] rounded-md cursor-pointer"
                                onClick={() => setOpenSetting((value) => !value)}>
                                <TbSettings2 size={18} className='text-[#6A5842]' /> <span>General</span>
                            </li>
                        </ul>
                    </nav>
                </motion.aside>
            </div>
        </>
    )
}

export default React.memo(Navigation);