import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// import postData from 'posts/_data';
import HomePage from 'pages/home/home-page';

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
};

const rootEl = document.querySelector('#root');
ReactDOM.render(<App />, rootEl);
