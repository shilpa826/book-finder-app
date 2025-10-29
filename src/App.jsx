import React, { useState, useCallback } from 'react';
import SearchForm from './components/SearchForm';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lastQuery, setLastQuery] = useState('');

    const fetchBooks = useCallback(async (query, type) => {
        setIsLoading(true);
        setError(null);
        setBooks([]);
        setLastQuery(query);

        // Base URL for the Open Library Search API
        const BASE_URL = 'https://openlibrary.org/search.json';
        let API_URL = '';

        // Determine the API endpoint based on the search type
        switch (type) {
            case 'title':
                API_URL = `${BASE_URL}?title=${encodeURIComponent(query)}`;
                break;
            case 'author':
                API_URL = `${BASE_URL}?author=${encodeURIComponent(query)}`;
                break;
            case 'subject':
                API_URL = `${BASE_URL}?subject=${encodeURIComponent(query)}`;
                break;
            case 'isbn':
                API_URL = `${BASE_URL}?isbn=${encodeURIComponent(query)}`;
                break;
            default:
                setError('Invalid search type selected.');
                setIsLoading(false);
                return;
        }

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch data from Open Library.');
            }
            const data = await response.json();
            
            // Check if results exist and filter for relevant fields
            if (data.docs && data.docs.length > 0) {
                const formattedBooks = data.docs.map(book => ({
                    key: book.key,
                    title: book.title,
                    author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
                    publishYear: book.first_publish_year,
                    isbn: book.isbn ? book.isbn[0] : 'N/A',
                    // Open Library Cover API: Uses the cover_i field (cover ID)
                    coverId: book.cover_i, 
                }));
                setBooks(formattedBooks);
            } else {
                setBooks([]);
                setError(`No books found for "${query}". Try a different search type.`);
            }

        } catch (err) {
            setError(err.message || 'An unknown API error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
                    🎓 Alex's Book Finder
                </h1>
                <p className="text-gray-500 mb-6">
                    Search by Title, Author, Subject, or ISBN.
                </p>
                
                <SearchForm onSearchSubmit={fetchBooks} isLoading={isLoading} />
                
                <hr className="my-8 border-gray-200" />
                
                {isLoading && (
                    <div className="text-center text-blue-600 font-semibold mt-4">
                        <p>Searching the library...</p>
                    </div>
                )}
                
                {error && (
                    <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 rounded">
                        <p className="font-bold">Search Error</p>
                        <p>{error}</p>
                    </div>
                )}
                
                {books.length > 0 && !isLoading && (
                    <>
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">
                            Results for: "{lastQuery}"
                        </h2>
                        <BookList books={books} />
                    </>
                )}
                 
                {books.length === 0 && !isLoading && !error && lastQuery && (
                    <p className="text-gray-500 text-center mt-6">
                        No results found. Please refine your search.
                    </p>
                )}
            </div>
        </div>
    );
}

export default App;