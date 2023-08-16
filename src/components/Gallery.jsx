import React from 'react';
import HornedBeast from './HornedBeast';
// import data from '../assets/data.json';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        {data.map((item, _id) => 
          <HornedBeast key={_id} title={item.title} image_url={item.image_url} keyword={item.keyword} description={item.description} />
        )}
      </div>
    );
  }
}

export default Gallery;
