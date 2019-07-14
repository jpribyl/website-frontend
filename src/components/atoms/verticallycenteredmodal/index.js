import React, {Component} from 'react';
import {Button, Modal, Image} from 'react-bootstrap';

class VerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
                {this.props.children}
        </Modal.Body>
        {
        //<Modal.Footer>
          //<Button onClick={this.props.onHide}>Close</Button>
        //</Modal.Footer>
        }
      </Modal>
    );
  }
}

export default VerticallyCenteredModal
