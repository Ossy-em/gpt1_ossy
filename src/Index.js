import React from 'react';
// import ReactDOM from 'react-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )