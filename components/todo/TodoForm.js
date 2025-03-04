import React, { useState } from 'react'
import { useTodo } from '@/context/TodoContext';

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
                placeholder="Write Todo..."
                className="border border-[#C9C7BA] placeholder:text-[#C9C7BA] rounded-l-lg px-3 outline-none duration-150 text-[#C9C7BA] bg-transparent py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 text-[#29292B] bg-[#C9C7BA] shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;