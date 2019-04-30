import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'divide':
      return { count: state.count / 2 };
    case 'multiply':
      return { count: state.count * 2 };
    case 'reset':
      return { count: 1 };
    default:
      throw new Error();
  }
}

function Multiply({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reset = () => dispatch({ type: 'reset' });
  const divide = () => dispatch({ type: 'divide' });
  const multiply = () => dispatch({ type: 'multiply' });

  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={reset}>RESET</button>
      <button onClick={divide}>HALF</button>
      <button onClick={multiply}>DOUBLE</button>
    </>
  );
}

export default Multiply;