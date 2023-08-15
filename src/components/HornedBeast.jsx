import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteCount: 0, };
  }
  handleClick = () => {
    this.setState({favoriteCount: this.state.favoriteCount+1});
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={this.props.image_url}
          alt={this.props.keyword}
          title={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
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