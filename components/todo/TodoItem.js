import React, { useState } from 'react'
import { useTodo } from '@/context'

const TodoItem = ({ todo }) => {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-[#C9C7BA] rounded-lg px-3 py-1.5 gap-x-3 duration-300  text-white ${todo.completed ? "text-[#C9C7BA] bg-[#29292B]" : "bg-[#C9C7BA] text-[#29292B]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-[#C9C7BA] px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-[#C9C7BA] justify-center items-center shrink-0"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-[#C9C7BA] justify-center items-center shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;