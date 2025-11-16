import React from 'react';
import BookItem from './BookItem';

const BookList = ({books}) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Список книг
            </h1>
            {books.map(book => 
                <BookItem book={book} key={book.id}/>
            )}                        
        </div>
    );
};

export default BookList;