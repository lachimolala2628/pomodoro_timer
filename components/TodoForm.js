import React, { useState } from 'react'
import { useTodo } from '@/context'

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
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Add a new task..."
                className="w-full border border-[#727272] bg-[#E8E8E8] rounded-l-lg px-3 outline-none duration-150 placeholder:text-[#0C0C0C] py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#0C0C0C] text-[#E8E8E8] shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;