import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Footer from './components/Footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Section1 />
    <Section2 />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
