import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { CircleHalf } from 'react-bootstrap-icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: this.props.whichColor
            ? this.props.lightMode
            : this.props.darkMode,
          color: this.props.whichColor
            ? this.props.darkMode
            : this.props.lightMode,
        }}
      >
        <h1>Horned Beast</h1>
        <div>
          <p>Click icon below to change background color</p>
          <CircleHalf
            style={{ fontSize: '250%' }}
            onClick={() => this.props.isColor()}
          />
        </div>
      </Navbar>
    );
  }
}
export default Header;
