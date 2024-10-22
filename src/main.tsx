import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import { Provider } from 'react-redux';
import { store } from './App/Store';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
