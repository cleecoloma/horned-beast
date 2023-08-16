import React from 'react';
import HornedBeast from './HornedBeast';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selected: false,
    // };
  }

  // handleClick = () => {
  //   this.props.isPreview;
  // }

  render() {
    return (
      <div>
        {this.props.handleData.map((item, _id) => (
          <HornedBeast
            key={_id}
            title={item.title}
            image_url={item.image_url}
            keyword={item.keyword}
            description={item.description}
            preview={this.props.preview}
            onClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
