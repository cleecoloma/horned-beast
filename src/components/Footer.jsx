import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
        <h3
          style={{
            backgroundColor: this.props.whichColor
              ? this.props.lightMode
              : this.props.darkMode,
            color: this.props.whichColor
              ? this.props.darkMode
              : this.props.lightMode,
            marginBottom: '0',
            padding: '1rem'
          }}
        >
          Proudly built by Chester Lee Coloma
        </h3>
      </>
    );
  }
}

export default Footer;
