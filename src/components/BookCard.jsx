import React from 'react';

function BookCard({ book }) {
    // Open Library Cover API URL builder
    const getCoverUrl = (id) => 
        id ? `https://covers.openlibrary.org/b/id/${id}-M.jpg` : null; // '-M' for medium size

    const coverUrl = getCoverUrl(book.coverId);

    return (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col shadow-sm hover:shadow-lg transition duration-200 bg-white">
            <div className="flex items-start space-x-4">
                {/* Book Cover Image */}
                <div className="flex-shrink-0 w-24 h-32 bg-gray-100 border border-gray-300 rounded overflow-hidden">
                    {coverUrl ? (
                        <img 
                            src={coverUrl} 
                            alt={`Cover of ${book.title}`} 
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/book-placeholder.png'; }} // Simple error handling
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 p-1">
                            No Cover
                        </div>
                    )}
                </div>

                {/* Book Details */}
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">
                        {book.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                        By: {book.author}
                    </p>
                    
                    <div className="text-xs text-gray-500 space-y-1">
                        <p>
                            **Published:** {book.publishYear || 'N/A'}
                        </p>
                        <p>
                            **ISBN (10/13):** {book.isbn}
                        </p>
                        <p>
                             **Open Library Key:** <span className='font-mono'>{book.key}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;