import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep this if you plan to use global styles; otherwise, remove it.
import App from './App'; // Main component

// Render the React app to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
