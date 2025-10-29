import React from 'react';
import BookCard from './BookCard';

function BookList({ books }) {
    if (!books || books.length === 0) {
        // This case should be handled by the parent App.js, 
        // but included here for robustness.
        return <p className="text-center text-gray-500 mt-4">No books to display.</p>;
    }

    return (
        // Use a responsive grid layout for displaying book covers and details
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book) => (
                <BookCard 
                    key={book.key} // Unique identifier from Open Library
                    book={book} 
                />
            ))}
        </div>
    );
}

export default BookList;