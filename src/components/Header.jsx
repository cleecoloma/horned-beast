import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { CircleHalf } from 'react-bootstrap-icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: true };
  }
  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    return (
      <Navbar
        // className="bg-body-tertiary"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: this.state.isClicked ? 'lightsalmon' : 'lightgray',
        }}
      >
        <h1>Horned Beast</h1>
        <div>
          <p>Click Icon Below for Light/Dark Mode</p>
          <CircleHalf style={{ fontSize: '250%' }} onClick={this.handleClick}/>
        </div>
      </Navbar>
    );
  }
}
export default Header;
