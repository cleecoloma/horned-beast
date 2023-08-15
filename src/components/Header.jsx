import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { CircleHalf } from 'react-bootstrap-icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteCount: 0 };
  }
  handleClick = () => {
    this.setState({ favoriteCount: this.state.favoriteCount + 1 });
  };
  render() {
    return (
      <Navbar
        className="bg-body-tertiary"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
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
