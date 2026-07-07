'use client'
import React, { useState } from 'react'
import { useTodo } from '@/context'
import { IoAdd } from "react-icons/io5";

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <input
                type="text"
                placeholder="Add a new task"
                className="w-full border-none bg-[#FAFAFA] font-libra rounded-l-lg px-3 outline-none duration-150 placeholder:text-[#0C0C0C] placeholder:font-libra py-2"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 font-libra font-semibold bg-[#F0E4D6] text-[#0C0C0C] shrink-0">
                <IoAdd />
            </button>
        </form>
    );
}

export default TodoForm;