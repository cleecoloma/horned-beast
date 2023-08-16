import React from "react";
import { Modal, Button } from "react-bootstrap";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.preview} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Overdraft Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Not enough money in the bank :</Modal.Body>
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