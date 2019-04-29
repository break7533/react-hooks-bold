import React, { useEffect,useState } from 'react';
import { render } from 'react-dom';

/*
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}
*/

function TodoApp() {

const [items,setItems] = useState([]);
const [text,setText] = useState('');
  return (
      <div>
        <h3>TODO</h3>
        <TodoList items={items} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={handleChange}
            value={text}
          />
          <button>
            Add #{items.length + 1}
          </button>
        </form>
      </div>
    );

  function handleChange(e){
    setText(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
    if (!text.length) {
      return;
    }
    const newItem = {
      text,
      id: Date.now()
    };

    setItems(items => items.concat(newItem));
    setText('');
}
}

function TodoList({ items }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
}

export default TodoApp;