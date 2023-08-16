import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import hornedBeastData from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';

function App() {
  this.state = {
    
  }
  
  return (
    <>
      <Header />
      <Gallery preview={this.preview} handleData={hornedBeastData} />
      <SelectedBeast />
      <Footer />
    </>
  );
}

export default App;
