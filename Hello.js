import React, {useContext} from 'react';
import { context } from './Context'

export default () => {
  const value = useContext(context);
  return (
    <h1>Hello {value.name}!</h1>
  );
}