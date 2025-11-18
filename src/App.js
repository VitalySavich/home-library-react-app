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
  
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();    
    const newBook = {
      id: Date.now(),
      name,
      author,
      published,
      year,
      city
    }
    
    setBooks([...books, newBook]);
    setName('');
    setAuthor('');
    setPublished('');
    setYear('');
    setCity('');

  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Название книги"
        />
        <MyInput 
          value={author}
          onChange={e => setAuthor(e.target.value)}
          type="text"
          placeholder="Автор"
        />
        <MyInput
          value={published}
          onChange={e => setPublished(e.target.value)}
          type="text"
          placeholder="Издательство"
        />
        <MyInput 
          value={year}
          onChange={e => setYear(e.target.value)}
          type="text"
          placeholder="Год издания"
        />
        <MyInput
          value={city}
          onChange={e => setCity(e.target.value)} 
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
