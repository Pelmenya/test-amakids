import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';

import '@ya.praktikum/react-developer-burger-ui-components';
import './index.css';
import { store } from './services/redux/store';
//import { Provider as ReduxProvider } from 'react-redux';
//import { store } from './services/redux/store';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(

    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
