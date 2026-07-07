import React, { useState } from 'react'
import { useTodo } from '@/context'
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoSaveOutline } from "react-icons/io5";

const TodoItem = ({ todo }) => {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className={
            `flex rounded-lg px-3 py-1.5 gap-x-3 duration-300 ${todo.completed ? "text-[#0C0C0C]" : "text-[#0C0C0C]"}`
        }>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`outline-none w-full font-libra rounded-lg text-[#0C0C0C] ${isTodoEditable ? "bg-[#FAFAFA] shadow-[0_2px_10px_rgba(0,0,0,0.1)] px-2" : "bg-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-9 h-9 rounded-lg text-sm text-[#0C0C0C] justify-center items-center shrink-0"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? <IoSaveOutline /> : <FiEdit2 />}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-9 h-9 rounded-lg text-sm text-[#0C0C0C] justify-center items-center shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                <AiOutlineDelete />
            </button>
        </div>
    );
}

export default TodoItem;