import React, { useState } from 'react';

const AddTaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !assignedTo) {
            alert('Please fill all fields');
            return;
        }
        onTaskAdded({ title, description, assignedTo, status: 'To do' });
        setTitle('');
        setDescription('');
        setAssignedTo('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Create New Task</h2>
                </div>

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Task Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Enter task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700 mb-1">
                        Assign To
                    </label>
                    <input
                        id="assignedTo"
                        type="text"
                        placeholder="Enter assignee name"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTaskForm;