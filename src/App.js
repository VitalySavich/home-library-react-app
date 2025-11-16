import logo from './logo.svg';
import './App.css';
import BookItem from './components/BookItem';
import { useState } from 'react';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([
    {id: 1, author: 'Л.А.Аксенович Н.Н.Ракина', name: 'Физика', published: 'Дизайн ПРО', year: '2001', city: 'Минск'},
    {id: 2, author: 'И.П Шамякин и др.', name: 'Брест Энциклопедический справочник', published: 'Белорусская Советская Энциклопедия им. Петруся Бровки', year: '1987', city: 'Минск'},
    {id: 3, author: 'Эрик Х. Клайн"	"История 1177 год до н.э. Год когда пала цивилизация', name: 'АСТ', published: '', year: '2018', city: 'Москва'}
  ]);

  return (
    <div className="App">
      <BookList books={books}/>      
    </div>
  );
}

export default App;
