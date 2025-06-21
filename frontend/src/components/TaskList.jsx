import React from 'react';

const TaskList = ({ tasks, onUpdateStatus, onDelete, isAdmin }) => {
    const statusOptions = ['To do', 'In progress', 'Done'];

    const getStatusColor = (status) => {
        switch (status) {
            case 'To do': return 'bg-gray-200 text-gray-800';
            case 'In progress': return 'bg-blue-200 text-blue-800';
            case 'Done': return 'bg-green-200 text-green-800';
            default: return 'bg-gray-200 text-gray-800';
        }
    };


    const getStatusIcon = (status) => {
        switch (status) {
            case 'To do': return '📋';
            case 'In progress': return '⚡';
            case 'Done': return '✅';
            default: return '📋';
        }
    };

    if (tasks.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-xl text-gray-700 font-medium mb-2">No tasks found</p>
                    <p className="text-gray-500">There are no tasks assigned to you, or your filters returned no results.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tasks.map((task) => (
                <div
                    key={task._id}
                    className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between transition-shadow hover:shadow-lg"
                >
                    <div>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-md text-gray-800 line-clamp-2 mr-2">
                                {task.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)} flex-shrink-0`}>
                                {getStatusIcon(task.status)} {task.status}
                            </span>
                        </div>

                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                            {task.description}
                        </p>

                        <div className="flex items-center mb-4 p-2 bg-gray-50 rounded-lg border">
                            <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2 flex-shrink-0">
                                {task.assignedTo.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">{task.assignedTo}</p>
                                <p className="text-xs text-gray-500">Assignee</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                        {/* Status dropdown is now visible to all users for their tasks */}
                        <div className="relative flex-1">
                            <select
                                value={task.status}
                                onChange={(e) => onUpdateStatus(task._id, e.target.value)}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                            >
                                {statusOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {getStatusIcon(option)} {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Delete button is still only visible to admins */}
                        {isAdmin && (
                            <button
                                onClick={() => onDelete(task._id)}
                                className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default TaskList;