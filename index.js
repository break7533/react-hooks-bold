import React, { useState } from 'react';
import { render } from 'react-dom';
import Timer from './Timer';
import ToDo from './ToDo';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//render(<Example />, document.getElementById('root'));
//render(<Timer />, document.getElementById('root'));
render(<ToDo />, document.getElementById('root'));
