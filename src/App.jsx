import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import hornedBeastData from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { preview: false, selectedCardIndex: null }
  }

  toggleModal = () => {
    this.setState({ preview: !this.state.preview })
  }

  render() {
    return (
      <>
        <Header />
        <Gallery clickMe={this.toggleModal} handleData={hornedBeastData} />
        <SelectedBeast preview={this.state.preview} toggleModal={this.toggleModal} />
        <Footer />
      </>
    );
  }
}

export default App;
