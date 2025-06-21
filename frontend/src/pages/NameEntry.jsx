import React, { useState } from 'react';

const NameEntry = ({ onNameSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onNameSubmit(name.trim());
        } else {
            alert("Please enter a name.");
        }
    };

    // ...existing code...
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Welcome to Task Manager</h2>
                <p className="text-gray-600 mb-6">Please enter your name to view your tasks.</p>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-center"
                    />
                </div>
                <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    Continue
                </button>
            </form>
        </div>
    );
};

export default NameEntry;