import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <p>app</p>
  );
};

const rootEl = document.querySelector('#root');
ReactDOM.render(<App />, rootEl);
