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
      whichColor: true,
      lightMode: '#F1F0E8', //gray
      darkMode: 'black',
    };
  }

  toggleColorMode = () => {
    this.setState({ whichColor: !this.state.whichColor })
  };

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
        <Header
          whichColor={this.state.whichColor}
          lightMode={this.state.lightMode}
          darkMode={this.state.darkMode}
          isColor={this.toggleColorMode}
        />
        <Gallery
          whichColor={this.state.whichColor}
          lightMode={this.state.lightMode}
          darkMode={this.state.darkMode}
          isColor={this.toggleColorMode}
          clickMe={this.toggleModal}
          handleData={hornedBeastData}
        />
        <SelectedBeast
          className={this.toggleColorMode}
          title={this.state.selectedTitle}
          description={this.state.selectedDescription}
          img={this.state.selectedImage}
          favorites={this.state.selectedFavorites}
          preview={this.state.preview}
          toggleModal={this.toggleModal}
        />
        <Footer
          whichColor={this.state.whichColor}
          lightMode={this.state.lightMode}
          darkMode={this.state.darkMode}
          isColor={this.toggleColorMode}
          className={this.toggleColorMode}
        />
      </>
    );
  }
}

export default App;
