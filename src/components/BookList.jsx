import React from 'react';
import BookItem from './BookItem';

const BookList = ({books, title, remove}) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {books.map(book => 
                <BookItem remove={remove} book={book} key={book.id}/>
            )}                        
        </div>
    );
};

export default BookList;