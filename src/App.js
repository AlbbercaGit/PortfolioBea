import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Blanco from './components/Blanco';
import Negro from './components/Negro';
import Hombre from './components/Hombre';
import Cronicas from './components/Cronicas';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header id="header" />
      <Hero id="hero" />
      <Blanco id="blanco" />
      <Negro id="negro" />
      <Hombre id="hombre" />
      <Cronicas id="cronicas" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
