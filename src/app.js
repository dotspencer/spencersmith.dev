import React from 'react';
import ReactDOM from 'react-dom';

import LogoMaze from 'components/logo-maze';

const App = () => {
  return (
    <div>
      <LogoMaze />
    </div>
  );
};

const rootEl = document.querySelector('#root');
ReactDOM.render(<App />, rootEl);
