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
    this.state = {
      preview: false,
      selectedTitle: null,
      selectedDescription: null,
      selectedImage: null,
      selectedFavorites: null,
    };
  }

  toggleModal = (title, description, img, favorites) => {
    this.setState({ preview: !this.state.preview });
    this.setState({ selectedTitle: title});
    this.setState({ selectedDescription: description });
    this.setState({ selectedImage: img });
    this.setState({ selectedFavorites: favorites });
  }

  render() {
    return (
      <>
        <Header />
        <Gallery clickMe={this.toggleModal} handleData={hornedBeastData} />
        <SelectedBeast
          title={this.state.selectedTitle}
          description={this.state.selectedDescription}
          img={this.state.selectedImage}
          favorites={this.state.selectedFavorites}
          preview={this.state.preview}
          toggleModal={this.toggleModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
