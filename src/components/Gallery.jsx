import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0,
      data: this.props.handleData,
      newData: this.props.handleData,
    };
  }
  // filters the beast data json based on the number of horns that the user inputs
  filterData = () => {
    const updatedData = this.state.data.filter((beast) => beast.horns >= this.state.horns);
    this.setState({ newData : updatedData })
  }

  // updates the value of horn in the state and then invokes filterData as a callback function
  updateHorn = (value) => {
    this.setState({ horns: value }, () => {
      this.filterData();
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let parsedInput = parseInt(event.target.quantity.value);
    this.updateHorn(parsedInput);
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
          <Button
            style={{ margin: '1rem 0' }}
            variant="secondary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
        {this.state.newData.map((item, _id) => (
          <HornedBeast
            key={_id}
            title={item.title}
            image_url={item.image_url}
            keyword={item.keyword}
            description={item.description}
            horns={item.horns}
            clickMe={this.props.clickMe}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
