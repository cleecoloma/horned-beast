import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0,
    };
  }

  updateBeastData = (value) => {
    this.setState({ horns: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let parsedInput = parseInt(event.target.quantity.value);
    this.updateBeastData(parsedInput);
  };

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              margin: '0 auto',
              textAlign: 'center',
            }}
            controlId="formBasicEmail"
          >
            <Form.Label>Search by Number of Horns</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number Here"
              name="quantity"
            />
          </Form.Group>
          <Button style={{margin: '1rem 0'}} variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
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
