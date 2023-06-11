import './App.css';
import React from 'react';
import Header from '../components/basico/header/Header';
import Footer from '../components/basico/footer/Footer';
import Main from '../components/basico/main/Main'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
      </>
    </div>
  );
}
