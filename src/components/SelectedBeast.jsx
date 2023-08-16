import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.preview} onHide={this.props.toggleModal}>
        <Modal.Header style={{ fontSize: '150%', fontWeight: 'bold' }} closeButton>{this.props.title}</Modal.Header>
        <Modal.Body style={{ width: '500px' }}>
          <img src={this.props.img} style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
          {this.props.description}
        </Modal.Body>
        <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <HeartFill /> {this.props.favorites}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => this.props.toggleModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
