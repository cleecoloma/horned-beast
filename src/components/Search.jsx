import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   quantity: null,
    // };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let parsedInput = parseInt(event.target.quantity.value);
    this.props.numberOfHorns(parsedInput);
  }

  render() {
    return (
      <Form className="my-3" onSubmit={this.handleSubmit}>
        <Form.Group
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            margin: '0 auto',
            textAlign: 'center',
          }}
          className="my-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Search by Number of Horns</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Number Here"
            name="quantity"
            // onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Search;
