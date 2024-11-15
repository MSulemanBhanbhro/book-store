'use client'
import { useEffect, useState } from 'react';


export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch('/api/books'); 
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className='md:text-3xl text-xl md:font-bold bg-gray-300 md:w-[60%] w-[80%]  p-3 text-center mx-auto text-white'>Book List Created By M Suleman</h1>
      <ul className='flex justify-center items-center flex-wrap gap-5'>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id} style={{ margin: '10px 0', listStyle: 'none' }} className='space-x-4 text-center'>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: '400px', height: '300px',  marginBottom: '10px' }}
              />
              <h2 className='bg-gray-200 inline-block p-2 text-2xl mb-2'>Book Name: <span>{book.title}</span></h2>
              <p className='text-xl mb-2'>Author: {book.author}</p>
              <p className='text-lg font-bold'>Status: {book.available ? "Available" : "Not Available"}</p>
            </li>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </ul>
    </div>
  );
}
