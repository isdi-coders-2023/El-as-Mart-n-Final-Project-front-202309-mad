import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import './main.scss';
import { appStore } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
