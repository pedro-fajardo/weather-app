import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Main entry point for the application
 * 
 * This file is the entry point for the application and renders the root component
 * 
 * @module index
 */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);