import React from 'react';
import ReactDOM from 'react-dom';
import Carts from './Carts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carts />, div);
  ReactDOM.unmountComponentAtNode(div);
});