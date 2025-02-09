import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // You can add custom styles here if needed
import App from './App';  // Your root React component

// Renders the App component into the 'root' div in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

