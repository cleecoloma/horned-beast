import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteCount: 0 };
  }
  handleClick = () => {
    this.setState({ favoriteCount: this.state.favoriteCount + 1 });
  };
  // isClicked = () => {
  //   this.setState({ preview: !this.props.preview });
  // }

  render() {
    return (
      <Card
        style={{
          width: '18rem',
          margin: '2rem',
          display: 'inline-block',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
      >
        <Card.Img
          variant="top"
          style={{
            height: '15rem',
            objectFit: 'contain',
            backgroundColor: '#F1F0E8',
          }}
          src={this.props.image_url}
          alt={this.props.keyword}
          title={this.props.title}
          onClick={this.props.clickMe}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text style={{ height: '5rem' }}>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            <HeartFill /> {this.state.favoriteCount}
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick}>
            Favorite
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
