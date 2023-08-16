import React from "react";
import { Modal, Button } from "react-bootstrap";
import HornedBeast from "./HornedBeast";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.preview} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>HornedBeast Name</Modal.Header>
        <Modal.Body>HornedBeast Image</Modal.Body>
        <Modal.Body>HornedBeast Description</Modal.Body>
        <Modal.Body>HornedBeast Favorites</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;