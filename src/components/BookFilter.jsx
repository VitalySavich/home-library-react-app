import React from 'react';
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

const BookFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'name', name: 'По названию'},
                    {value: 'author', name: 'По автору'},
                    {value: 'published', name: 'По издательству'},
                    {value: 'year', name: 'По году издания'},
                    {value: 'city', name: 'По городу'}
                ]}
            />
        </div>
    );
};

export default BookFilter;