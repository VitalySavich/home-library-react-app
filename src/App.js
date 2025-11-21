import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import MySelect from './components/ui/select/MySelect';

function App() {

  const [selectedSort, setSelectedSort] = useState('');

  const [books, setBooks] = useState([
    {id: 1, author: 'Л.А.Аксенович Н.Н.Ракина', name: 'Физика', published: 'Дизайн ПРО', year: '2001', city: 'Минск'},
    {id: 2, author: 'И.П Шамякин и др.', name: 'Брест Энциклопедический справочник', published: 'Белорусская Советская Энциклопедия им. Петруся Бровки', year: '1987', city: 'Минск'},
    {id: 3, author: 'Эрик Х. Клайн', name: 'История 1177 год до н.э. Год когда пала цивилизация', published: 'АСТ', year: '2018', city: 'Москва'}
  ]);

  const createNewBook = (newBook) => {
        setBooks([...books, newBook]); 
  }

  const removeBook = (book) => {
        setBooks(books.filter(b => b.id !== book.id)); 
  }

  const sortBooks = (sort) => {
    setSelectedSort(sort);
    setBooks([...books].sort((a, b) => a[sort].localeCompare(b[sort])));        
  }


  return (
    <div className="App">
      <BookForm create={createNewBook}/>
      <hr style={{margin: "15px 0"}}/>
      <MySelect
          value={selectedSort}
          onChange={sortBooks}
          defaultValue="Сортировка"
          options={[
              {value: 'name', name: 'По названию'},
              {value: 'author', name: 'По автору'},
              {value: 'published', name: 'По издательству'},
              {value: 'year', name: 'По году издания'},
              {value: 'city', name: 'По городу'}
          ]}
      />
      {books.length !== 0 
        ?
        <BookList remove={removeBook} books={books} title="Список книг"/> 
        :
        <h1 style={{textAlign: 'center'}}>Книги не найдены!</h1> 
      }           
    </div>
  );
}

export default App;
