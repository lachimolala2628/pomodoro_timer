import React, { useState } from 'react'
import { TbSettings2 } from "react-icons/tb"
import { LiaColumnsSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Link from 'next/link';
import { PiTimer } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";
import { BsChatQuote } from "react-icons/bs";
import { IoChevronDown } from 'react-icons/io5';


const Navigation = ({ setOpenSetting, setIsOpen, isOpen, sounds, activeSound, toggleSound }) => {

    const [ambienceOpen, setAmbienceOpen] = useState(false);

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
                    className="fixed top-2 left-0 h-[97vh] w-56 bg-[#F5EBE0] shadow-md p-6 rounded-lg"
                >
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="h-10 w-10 text-[#FAFAFA] bg-[#18181B] flex items-center justify-center rounded-lg font-bold">
                            <h1 className='font-semibold text-2xl font-lora'>P</h1>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold uppercase text-[#665442] font-lora">Pomo</h2>
                        </div>
                    </div>

                    <nav>
                        <h3 className="text-sm font-bold text-[#665442] mb-2 font-lora">General</h3>
                        <ul className="space-y-4 mb-6">
                            <Link href='/'>
                                <li className="flex items-center p-2 space-x-2 text-[#6A5842] font-libra rounded-md cursor-pointer">
                                    <PiTimer size={20} className='text-[#6A5842]' /> <span>Timer</span>
                                </li>
                            </Link>
                            <Link href='/todo'>
                                <li className="flex items-center p-2 space-x-2 text-[#6A5842] font-libra rounded-md cursor-pointer">
                                    <LuListTodo size={20} className='text-[#6A5842]' /> <span>Tasks</span>
                                </li>
                            </Link>
                            <Link href='/quote'>
                                <li className="flex items-center p-2 space-x-2 text-[#6A5842] font-libra rounded-md cursor-pointer">
                                    <BsChatQuote size={20} className='text-[#6A5842]' /> <span>Quotes</span>
                                </li>
                            </Link>
                        </ul>

                        <div className="mb-2 mt-6">
                            <div
                                className="flex items-center justify-between cursor-pointer mb-4"
                                onClick={() => setAmbienceOpen((prev) => !prev)}
                            >
                                <h3 className="text-sm font-bold text-[#665442] font-lora">Ambience</h3>
                                <motion.div
                                    animate={{ rotate: ambienceOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IoChevronDown size={14} className="text-[#665442]" />
                                </motion.div>
                            </div>

                            <motion.ul
                                initial={false}
                                animate={{
                                    height: ambienceOpen ? "auto" : 0,
                                    opacity: ambienceOpen ? 1 : 0,
                                }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="space-y-4 overflow-hidden"
                            >
                                {sounds.map((sound) => (
                                    <li
                                        key={sound.id}
                                        className="flex items-center p-2 space-x-2 text-[#6A5842] font-libra rounded-md cursor-pointer"
                                        onClick={() => toggleSound(sound.id)}
                                    >
                                        <div className="flex items-end justify-center space-x-0.5" style={{ height: '5pt', width: '9pt' }}>
                                            {[0, 1, 2, 3].map((bar) => (
                                                <motion.span
                                                    key={bar}
                                                    className={`rounded-full ${activeSound === sound.id ? 'bg-[#6A5842]' : 'bg-[#6A5842]'}`}
                                                    style={{ width: '3px' }}
                                                    animate={
                                                        activeSound === sound.id
                                                            ? { height: ['6px', '12px', '6px'] }
                                                            : { height: '8px' }
                                                    }
                                                    transition={
                                                        activeSound === sound.id
                                                            ? {
                                                                duration: 0.6,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                delay: bar * 0.15,
                                                            }
                                                            : { duration: 0.2 }
                                                    }
                                                />
                                            ))}
                                        </div>
                                        <span>{sound.label}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>

                        <h3 className="text-sm font-bold text-[#665442] font-lora mb-2 mt-6">Settings</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center p-2 space-x-2 text-[#6A5842] font-libra rounded-md cursor-pointer"
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