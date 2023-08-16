import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../assets/data.json';

function App() {
  
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
