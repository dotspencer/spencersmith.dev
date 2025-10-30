import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './home-page.jsx';

import './global.scss';
import styles from './app.module.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={styles.app}>
      <HomePage />
    </div>
  </React.StrictMode>,
);
