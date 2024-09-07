"use client"

import React, { useState } from 'react';

export const CtaSection = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        // Placeholder for actual submission logic, like API call
        alert(`Thank you for subscribing, ${email}`);
        setEmail(""); // Clear email after submission
    };

    return (
        <section className="py-6 bg-black text-gray-50">
            <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row" id='contact'>
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-5xl font-bold leading-none">
                        Be a Part of the AR Revolution.
                    </h1>
                    <p className="text-lg">
                        Join our community and stay updated with the latest in Augmented Reality technology. From groundbreaking innovations to exclusive insights, get it all directly to your inbox.
                    </p>
                </div>
                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <input
                                placeholder="Enter your email"
                                className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button
                                type="button"
                                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
                                onClick={handleSubmit}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
