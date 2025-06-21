import React from 'react';

const FilterControls = ({ assignees, onFilterChange }) => {
    const handleClear = () => {
        onFilterChange('assignedTo', '');
        onFilterChange('status', '');
        document.getElementById('assignee-filter').value = '';
        document.getElementById('status-filter').value = '';
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Filter Tasks</h2>
            </div>

            <div className="space-y-4">
                <div>
                    <label htmlFor="assignee-filter" className="block text-sm font-medium text-gray-700 mb-1">
                        Filter by Assignee
                    </label>
                    <select
                        id="assignee-filter"
                        onChange={(e) => onFilterChange('assignedTo', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white cursor-pointer"
                    >
                        <option value="">All Assignees</option>
                        {assignees.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                        Filter by Status
                    </label>
                    <select
                        id="status-filter"
                        onChange={(e) => onFilterChange('status', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white cursor-pointer"
                    >
                        <option value="">All Statuses</option>
                        <option value="To do">📋 To do</option>
                        <option value="In progress">⚡ In progress</option>
                        <option value="Done">✅ Done</option>
                    </select>
                </div>

                <div className="pt-2">
                    <button
                        onClick={handleClear}
                        className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-300 transition-colors"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterControls;