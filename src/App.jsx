import './App.css';
import React from 'react';
import Header from './components/basico/header/Header';
import Footer from './components/basico/footer/Footer';
import Main from './components/basico/main/Main'

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
