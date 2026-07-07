'use client'
import { TodoForm, TodoItem } from '@/components'
import { TodoProvider } from '@/context'
import { useState, useEffect } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))


    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        //console.log(id);
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? {
                    ...prevTodo,
                    completed: !prevTodo.completed
                } : prevTodo))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])




    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#E3D5CA] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto px-4 py-3 text-[#0C0C0C]">
                    <h1 className="text-5xl font-semibold mt-2 font-lora">Tasks</h1>
                    <p className='text-lg mb-5 mt-4 font-libra font-normal'>Focus on a few tasks and make progress on them.</p>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-1.5">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id}
                                className='w-full'
                            >
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default Todo