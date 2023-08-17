import React from 'react';
import HornedBeast from './HornedBeast';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.whichColor
            ? this.props.lightMode
            : this.props.darkMode,
          color: this.props.whichColor
            ? this.props.darkMode
            : this.props.lightMode,
        }}
      >
        {this.props.handleData.map((item, _id) => (
          <HornedBeast
            key={_id}
            title={item.title}
            image_url={item.image_url}
            keyword={item.keyword}
            description={item.description}
            clickMe={this.props.clickMe}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
