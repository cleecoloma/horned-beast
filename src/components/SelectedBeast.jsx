import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import HornedBeast from "./HornedBeast";

class SelectedBeast extends React.Component {
  constructor(props) {
    // console.log(props)
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.preview} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>{this.props.title}</Modal.Header>
        <Modal.Body style={{ width: '500px' }}>
          <img src={this.props.img} style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => this.props.toggleModal(null, null, null)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
