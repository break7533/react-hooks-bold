import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

function BookPagination() {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const changePage = (direction) => {
    if(page>0){
      setPage(page+direction);
    }
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+page)
      .then(result => result.json())
      .then(data => {
        setItems(data);
      })
  },[page]);

  return (
    <div>
      <h3>Books</h3>
      <BookList items={items} />
      <button onClick={() => changePage(-1)}>Previous Page</button>
      <button onClick={() => changePage(1)}>Next Page</button>
    </div>
  );
}

function BookList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.thumbnailUrl}/>
        </li>
      ))}
    </ul>
  );
}

export default BookPagination;