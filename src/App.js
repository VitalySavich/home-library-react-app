import logo from './logo.svg';
import './App.css';
import BookItem from './components/BookItem';
import { useRef, useState } from 'react';
import BookList from './components/BookList';
import MyButton from './components/ui/button/MyButton';
import MyInput from './components/ui/input/MyInput';

function App() {
  const [books, setBooks] = useState([
    {id: 1, author: 'Л.А.Аксенович Н.Н.Ракина', name: 'Физика', published: 'Дизайн ПРО', year: '2001', city: 'Минск'},
    {id: 2, author: 'И.П Шамякин и др.', name: 'Брест Энциклопедический справочник', published: 'Белорусская Советская Энциклопедия им. Петруся Бровки', year: '1987', city: 'Минск'},
    {id: 3, author: 'Эрик Х. Клайн"	"История 1177 год до н.э. Год когда пала цивилизация', name: 'АСТ', published: '', year: '2018', city: 'Москва'}
  ]);
  
  const [book, setBook] = useState({
    name: '',
    author: '',
    published: '',
    year: '',
    city: ''
  });

  const addNewBook = (e) => {
    e.preventDefault();    
    
    setBooks([...books, {...book, id: Date.now()}]);
    setBook({
      name: '',
      author: '',
      published: '',
      year: '',
      city: ''
    });  
  }

  return (
    <div className="App">
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
      <BookList books={books} title="Список книг"/>      
    </div>
  );
}

export default App;
