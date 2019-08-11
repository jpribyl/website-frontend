//@format
import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import Profile from '../../assets/img/profile.jpg';
import ModalGallery from '../../components/molecules/modalgallery';
import bioGalleryPhotos from '../../objects/biophotos';
import {AwesomeButton} from 'react-awesome-button';
import {Tooltip} from 'react-tippy';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PDF from '../../components/atoms/pdf';

class ResumeView extends Component {
  constructor(props) {
    super();

    let height, width, numPoints;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.2;
      width = (window.innerWidth - 200) * 0.88;
      numPoints = 40;
    } else {
      height = window.innerHeight * 0.1;
      width = window.innerWidth * 0.7;
      numPoints = 15;
    }

    this.state = {
      headerText: 'RESUME',
      duration: 50000,
      animate: true,
      numPoints: numPoints,
      width: width,
      height: height,
      maxRadius: 20,
      margin: {
        top: 30,
        right: (window.innerWidth - 200) * 0.02,
        bottom: 30,
        left: (window.innerWidth - 200) * 0.02
      },
      techStackExpanded: null,
      profInterestsExpanded: null
    };
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Grid fluid={true} className="metismenuGridPad">
          <Row>
            <div className="padForMenu">
              <Header
                text={this.state.headerText}
                numPoints={this.state.numPoints}
                duration={this.state.duration}
                width={this.state.width}
                height={this.state.height}
                maxRadius={this.state.maxRadius}
                margin={this.state.margin}
                animate={this.state.animate}
              />
            </div>
            <hr className="hrLarge" />
          </Row>
          <div className="well">
            <Row className="padForGrid">
              <Card
                no_separator
                xs={12}
                md={12}
                content={
                  <a href="mailto:pribylsnbits@gmail.com">
                    <Tooltip
                      title="Scratch here to reveal prize"
                      arrow={true}
                      size="big">
                      <span className="technologyButton centerJustifyNoMargin">
                        <AwesomeButton
                          style={{width: '100%'}}
                          type="primary"
                          bubbles={true}>
                          Get in touch
                        </AwesomeButton>
                      </span>
                    </Tooltip>
                  </a>
                }
              />
              <Card
                no_separator
                xs={12}
                md={12}
                content={
                  <>
                    <PDF
                      style={{width: '100%', overflow: 'scroll'}}
                      loading="Loading Resume..."
                      className="resumePdf"
                      src={
                        'https://raw.githubusercontent.com/jpribyl/resume/master/resume.pdf'
                      }
                    />
                    <a href="https://github.com/jpribyl/resume/raw/master/resume.pdf">
                      <span className="technologyButton centerJustifyNoMargin">
                        <AwesomeButton
                          style={{
                            width: '100%',
                            maxWidth: '600px'
                          }}
                          type="secondary"
                          bubbles={true}>
                          <FontAwesomeIcon icon={'download'} /> Download PDF
                        </AwesomeButton>
                      </span>
                    </a>
                  </>
                }
              />
              <Card
                no_separator
                xs={12}
                md={12}
                content={
                  <a href="mailto:pribylsnbits@gmail.com">
                    <Tooltip title="Made you look!" arrow={true} size="big">
                      <span className="technologyButton centerJustifyNoMargin">
                        <AwesomeButton
                          style={{width: '100%'}}
                          type="primary"
                          bubbles={true}>
                          Get in touch
                        </AwesomeButton>
                      </span>
                    </Tooltip>
                  </a>
                }
              />
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
export default ResumeView;
