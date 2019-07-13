import React, {Component} from 'react';
import {Button, Modal, Image} from 'react-bootstrap';
import VerticallyCenteredModal from '../../../components/atoms/verticallycenteredmodal/';
class ClickModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.toggleShow = this.toggleShow.bind(this);

    this.state = {
      show: false
    };
  }

  toggleShow() {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <>
        <div style={{cursor: 'pointer'}} onClick={this.toggleShow}>
          {this.props.children}
          <VerticallyCenteredModal
            show={this.state.show}
            onHide={this.toggleShow}
          >
          {this.props.children}
          </VerticallyCenteredModal>
        </div>
      </>
    );
  }
}

export default ClickModal;
