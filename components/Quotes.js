import React, { useEffect, useState } from 'react';
import { IoRefresh } from "react-icons/io5";

const Quotes = () => {

    const [quotes, setQuotes] = useState({
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: 'Dr. Seuss'
    })

    const fetchNewQuotes = async () => {
        try {
            const url = 'https://api.quotable.io/random';
            const response = await fetch(url);
            const data = await response.json();
            setQuotes({
                text: data.content,
                author: data.author,
            });
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    useEffect(() => {
        fetchNewQuotes();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="max-w-md w-full bg-[#FAFAFA] shadow-lg rounded-2xl p-6 space-y-4 border border-neutral-200">
                <h1 className="text-2xl font-semibold text-neutral-800 text-center">Quotes</h1>
                <div className="relative">
                    <p className="text-lg text-center text-neutral-700 leading-relaxed">
                        <span className="text-4xl">&ldquo;</span>
                        {quotes.text}
                        <span className="text-4xl">&rdquo;</span>
                    </p>
                </div>
                <hr className="border-neutral-200" />
                <div className="flex items-center justify-between">
                    <span className="text-neutral-500 text-sm">- {quotes.author}</span>
                    <button onClick={fetchNewQuotes} className="text-neutral-500 hover:text-neutral-800 transition">
                        <IoRefresh size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quotes