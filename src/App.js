import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import MySelect from './components/ui/select/MySelect';
import MyInput from './components/ui/input/MyInput';

function App() {

  const [books, setBooks] = useState([
    {id: 1, author: 'Л.А.Аксенович Н.Н.Ракина', name: 'Физика', published: 'Дизайн ПРО', year: '2001', city: 'Минск'},
    {id: 2, author: 'И.П Шамякин и др.', name: 'Брест Энциклопедический справочник', published: 'Белорусская Советская Энциклопедия им. Петруся Бровки', year: '1987', city: 'Минск'},
    {id: 3, author: 'Эрик Х. Клайн', name: 'История 1177 год до н.э. Год когда пала цивилизация', published: 'АСТ', year: '2018', city: 'Москва'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedBooks = useMemo(() => {
    if(selectedSort){
      return [...books].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }else{
      return books;
    }
  }, [selectedSort, books]); 

  const sortedAndSearchedBooks = useMemo(() => {
    return sortedBooks.filter(book => book.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedBooks]);

  const createNewBook = (newBook) => {
        setBooks([...books, newBook]); 
  }

  const removeBook = (book) => {
        setBooks(books.filter(b => b.id !== book.id)); 
  }

  const sortBooks = (sort) => {
    setSelectedSort(sort);    
  }

  return (
    <div className="App">
      <BookForm create={createNewBook}/>
      <hr style={{margin: "15px 0"}}/>
      <MyInput 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск по названию"
      />
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
      {sortedAndSearchedBooks.length !== 0 
        ?
        <BookList remove={removeBook} books={sortedAndSearchedBooks} title="Список книг"/> 
        :
        <h1 style={{textAlign: 'center'}}>Книги не найдены!</h1> 
      }           
    </div>
  );
}

export default App;
