import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './views/Root';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
