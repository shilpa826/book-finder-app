import React, { useState } from 'react';

// Define the available search types for the user interface
const SEARCH_TYPES = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'subject', label: 'Subject' },
    { value: 'isbn', label: 'ISBN' },
];

function SearchForm({ onSearchSubmit, isLoading }) {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('title'); // Default to Title search

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearchSubmit(query.trim(), searchType);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex bg-gray-100 p-1 rounded-lg mb-4">
                {SEARCH_TYPES.map((type) => (
                    <button
                        key={type.value}
                        type="button"
                        onClick={() => setSearchType(type.value)}
                        className={`flex-1 py-2 text-sm font-medium rounded-md transition duration-150 
                            ${searchType === type.value
                                ? 'bg-white shadow-md text-blue-700'
                                : 'text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {type.label}
                    </button>
                ))}
            </div>

            <div className="flex space-x-3">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Search by ${searchType}...`}
                    required
                    disabled={isLoading}
                    className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-150 
                        ${isLoading 
                            ? 'bg-blue-300 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md'
                        }`}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
        </form>
    );
}

export default SearchForm;