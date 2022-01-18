import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header'
import Footer from './components/Footer'



const sections = [
    { title: 'Homepage', url: '/' },
    { title: 'XC flights', url: '/map' },
  ];



ReactDOM.render(
  <React.StrictMode>
    <Header title='Turbulences' sections={sections}/>
      <App />
    <Footer title='Have a good Flight !' description='A passionnate free flight pilot blog'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
