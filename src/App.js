import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([
    {id: 1, author: 'Л.А.Аксенович Н.Н.Ракина', name: 'Физика', published: 'Дизайн ПРО', year: '2001', city: 'Минск'},
    {id: 2, author: 'И.П Шамякин и др.', name: 'Брест Энциклопедический справочник', published: 'Белорусская Советская Энциклопедия им. Петруся Бровки', year: '1987', city: 'Минск'},
    {id: 3, author: 'Эрик Х. Клайн"	"История 1177 год до н.э. Год когда пала цивилизация', name: 'АСТ', published: '', year: '2018', city: 'Москва'}
  ]);

  const createNewBook = (newBook) => {
        setBooks([...books, newBook]); 
  }

  return (
    <div className="App">
      <BookForm create={createNewBook}/>
      <BookList books={books} title="Список книг"/>      
    </div>
  );
}

export default App;
