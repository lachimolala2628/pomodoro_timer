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
        <form onSubmit={add} className="flex shadow-md">
            <input
                type="text"
                placeholder="Add a new task..."
                className="w-full border-none bg-[#FAFAFA] rounded-l-lg px-3 outline-none duration-150 placeholder:text-[#0C0C0C] py-2"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 font-semibold bg-[#F0E4D6] text-[#634F4F] shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;