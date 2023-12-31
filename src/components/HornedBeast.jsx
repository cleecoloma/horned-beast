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
            objectFit: 'cover',
          }}
          src={this.props.image_url}
          alt={this.props.keyword}
          title={this.props.title}
          onClick={() =>
            this.props.clickMe(
              this.props.title,
              this.props.description,
              this.props.image_url,
              this.state.favoriteCount
            )
          }
        />
        <Card.Body style={{ backgroundColor: '#F1F0E8' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text style={{ height: '5rem' }}>
            {this.props.description}
          </Card.Text>
          <Card.Text style={{ height: '1rem' }}>
            Number of Horns: {this.props.horns}
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
