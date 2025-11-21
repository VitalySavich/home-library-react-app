import React from 'react';
import MyButton from "./ui/button/MyButton";
//import {useHistory} from 'react-router-dom';

const BookItem = (props) => {
    //const router = useHistory()

    return (
        <div className="book">
            <div className="book__content">
                <strong>{props.book.id}. {props.book.name}</strong>
                <div>
                    {props.book.author}
                </div>
                <div>
                    {props.book.published}
                </div>
                <div>
                    {props.book.year}
                </div>
                <div>
                    {props.book.city}
                </div>
            </div>
            <div className="book__btns">
                <MyButton onClick={() => console.log('Открыт!')}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.book)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default BookItem;