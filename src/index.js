import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router  } from 'react-router-dom';
import './index.scss';

import App from './App';

/* crear root para React versión 18 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
