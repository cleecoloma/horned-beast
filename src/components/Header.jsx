import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="bg-body-tertiary">
        <h1>Horned Beast</h1>
      </Navbar>
    );
  }
}
export default Header;