import { useState, useEffect } from 'react'
import { TodoProvider } from '@/context'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

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
            <div className="w-10/12 mx-auto pt-5 text-[#000000] flex flex-col justify-center items-center mt-10">
                <h1 className="text-3xl text-center mb-8 mt-2 font-semibold">Track Your Productivity</h1>
                <div className="mb-4">
                    {/* Todo form goes here */}
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
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
        </TodoProvider>
    )
}

export default Todo