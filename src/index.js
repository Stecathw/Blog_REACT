import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';

import Nav from './components/Nav'
import Footer from './components/Footer'

import './styles/styles.scss';

const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'XC flights Map', url: '/map' },
    { title: 'Gallery', url: '/gallery' },
    { title: 'Utiles', url: '' },
  ];



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav title='Turbulences' sections={sections}/>
        <App />
      <Footer title='Have a good Flight !' description='A passionnate free flight pilot blog'/>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
