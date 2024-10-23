import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './store'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </Suspense>
  </React.StrictMode>
)
