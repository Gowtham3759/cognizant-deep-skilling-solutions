// src/components/BookDetails.js
import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'React Explained', author: 'Zac Gordon' },
    { id: 2, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
  ];

  return (
    <div>
      <h3>📚 Book Details</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} — {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
