import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

function BookPagination() {

  const [items, setItems] = useState([]);

  useEffect(
    fetch('https://openlibrary.org/api/get?key=/b/OL1001932M')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
      })
  );

  return (
    <div>
      <h3>Books</h3>
      <BookList items={items} />
    </div>
  );
}

function BookList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default BookPagination;