import React, { useEffect, useState } from 'react';
import { IoRefresh } from "react-icons/io5";

const Quotes = () => {
    const [quotes, setQuotes] = useState({
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: 'Dr. Seuss'
    });

    const fetchNewQuotes = async () => {
        const url = 'https://motivation-quotes4.p.rapidapi.com/api';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd2eb687d5cmsh1c777a9971d61a9p12508ajsn4e97750b2973',
                'x-rapidapi-host': 'motivation-quotes4.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.text(); // API returns a string
            const parsedData = JSON.parse(data); // Convert string to JSON

            setQuotes({
                text: parsedData.quote, // Adjust based on actual API response
                author: parsedData.author || "Unknown", // Handle missing author
            });
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    useEffect(() => {
        fetchNewQuotes();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="max-w-md w-full bg-[#FAFAFA] shadow-lg rounded-2xl p-6 space-y-4 border-none">
                <h1 className="text-3xl font-semibold text-[#665442] text-center font-lora">Quotes</h1>
                <div className="relative">
                    <p className="text-lg text-center text-[#6A5842] leading-relaxed italic font-lora">
                        <span className="text-4xl">&ldquo;</span>
                        {quotes.text}
                        <span className="text-4xl">&rdquo;</span>
                    </p>
                </div>
                <hr className="border-[#0C0C0C]" />
                <div className="flex items-center justify-between">
                    <span className="text-[#6A5842] text-sm font-lora">- {quotes.author}</span>
                    <button onClick={fetchNewQuotes} className="text-[#6A5842]">
                        <IoRefresh size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quotes;