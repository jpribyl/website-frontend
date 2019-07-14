import React, {Component} from 'react';
import {Button, Modal, Image} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import VerticallyCenteredModal from '../../../components/atoms/verticallycenteredmodal/';

class ModalGallery extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleShow = this.toggleShow.bind(this);
    this.state = {
      imageSrc: null,
      show: false
    };
  }

  toggleShow(i, j) {
    if (j != null) {
      this.setState({imageSrc: j.photo.src, show: true});
    } else {
      this.setState({imageSrc: null, show: false});
    }
  }

  render() {
    return (
      <>
        <Gallery {...this.props} onClick={this.toggleShow} />
        <VerticallyCenteredModal
          show={this.state.show}
          onHide={this.toggleShow}>
          <div onClick={this.toggleShow}>
            <Image rounded responsive src={this.state.imageSrc} />
          </div>
        </VerticallyCenteredModal>
      </>
    );
  }
}

export default ModalGallery;
