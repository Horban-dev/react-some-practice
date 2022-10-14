import React from 'react';
import Input from './Input';
import SelectedList from './SelectedList';

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <Input value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}  placeholder='search input..'/>
      
            <SelectedList
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка"
            options={[
                {value: 'title', name: 'Сортировка по имени'},
                {value: 'body', name: 'Сортировка по тексту'}
            ]}
            />
        </div>
    );
}

export default PostFilter;