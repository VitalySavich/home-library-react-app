import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookFilter from './components/BookFilter';
import MyModal from './components/ui/modal/MyModal';
import MyButton from './components/ui/button/MyButton';

function App() {

  const [books, setBooks] = useState([
    {id: 1, author: 'Л.А.Аксенович Н.Н.Ракина', name: 'Физика', published: 'Дизайн ПРО', year: '2001', city: 'Минск'},
    {id: 2, author: 'И.П Шамякин и др.', name: 'Брест Энциклопедический справочник', published: 'Белорусская Советская Энциклопедия им. Петруся Бровки', year: '1987', city: 'Минск'},
    {id: 3, author: 'Эрик Х. Клайн', name: 'История 1177 год до н.э. Год когда пала цивилизация', published: 'АСТ', year: '2018', city: 'Москва'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedBooks = useMemo(() => {
    if(filter.sort){
      return [...books].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }else{
      return books;
    }
  }, [filter.sort, books]); 

  const sortedAndSearchedBooks = useMemo(() => {
    return sortedBooks.filter(book => book.name.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedBooks]);

  const createNewBook = (newBook) => {
        setBooks([...books, newBook]); 
        setModal(false);
  }

  const removeBook = (book) => {
        setBooks(books.filter(b => b.id !== book.id)); 
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Добавить книгу
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <BookForm create={createNewBook}/>
      </MyModal>
      <hr style={{margin: "15px 0"}}/>
      <BookFilter
        filter={filter}
        setFilter={setFilter}
      />
      <BookList remove={removeBook} books={sortedAndSearchedBooks} title="Список книг"/> 
    </div>
  );
}

export default App;
