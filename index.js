import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Timer from './Timer';
import ToDo from './ToDo';
import {Provider} from './Context';
import Multiply from './Multiply';

const App = () => (
    <div>
      <Hello/>
    </div>
);

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
//render(<ToDo />, document.getElementById('root'));
//render((<Provider value={{name: 'nome'}}><App /></Provider>),
//  document.getElementById('root'));
render(<Multiply initialState= {{count:1}} />, document.getElementById('root'));
