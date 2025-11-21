import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const BookForm = ({create}) => {
    
    const [book, setBook] = useState({
        name: '',
        author: '',
        published: '',
        year: '',
        city: ''
    });

    const addNewBook = (e) => {
        e.preventDefault();    
        
        create({...book, id: Date.now()});
        setBook({
            name: '',
            author: '',
            published: '',
            year: '',
            city: ''
        });  
    }

    return (
      <form>
        <MyInput 
          value={book.name}
          onChange={e => setBook({...book, name: e.target.value})}
          type="text"
          placeholder="Название книги"
        />
        <MyInput 
          value={book.author}
          onChange={e => setBook({...book, author: e.target.value})}
          type="text"
          placeholder="Автор"
        />
        <MyInput
          value={book.published}
          onChange={e => setBook({...book, published: e.target.value})}
          type="text"
          placeholder="Издательство"
        />
        <MyInput 
          value={book.year}
          onChange={e => setBook({...book, year: e.target.value})}
          type="text"
          placeholder="Год издания"
        />
        <MyInput
          value={book.city}
          onChange={e => setBook({...book, city: e.target.value})} 
          type="text"
          placeholder="Город"
        />
        <MyButton onClick={addNewBook}>Добавить книгу</MyButton>
      </form>
    );
};

export default BookForm;