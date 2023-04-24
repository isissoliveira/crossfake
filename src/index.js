import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

const body = ReactDOM.createRoot(document.getElementsByTagName("body")[0]);
body.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

