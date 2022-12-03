import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElem: HTMLElement | null = document.getElementById('root');
const root = ReactDOM.createRoot(rootElem as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

