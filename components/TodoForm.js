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
                className="w-full border border-[#18181B] bg-[#FAFAFA] rounded-l-lg px-3 outline-none duration-150 placeholder:text-[#18181B] py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#18181B] text-[#FAFAFA] shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;