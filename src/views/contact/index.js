//@format
import React, {Component} from 'react';
import Switch from 'react-toggle-switch';
import {AwesomeButton} from 'react-awesome-button';
import {Grid, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';

import Header from '../../components/organisms/d3/header';
import UserGeneratedGreeting from '../../components/organisms/d3/userPickGreeting/';
import {Link} from 'react-router-dom';

import Sidebar from '../../components/atoms/sidebar';

class BioView extends Component {
  constructor(props) {
    super();

    let height, width, numPoints;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.2;
      width = window.innerWidth * 0.89;
      numPoints = 40;
    } else {
      height = window.innerHeight * 0.1;
      width = window.innerWidth * 0.7;
      numPoints = 15;
    }

    this.state = {
      headerText: 'BIO',
      animate: false,
      numPoints: numPoints,
      width: width,
      height: height,
      maxRadius: 20,
      margin: {
        top: 30,
        right: window.innerWidth * 0.02,
        bottom: 30,
        left: window.innerWidth * 0.02
      }
    };
  }
  _togglAnimate = () => {
    this.setState({animate: !this.state.animate});
  };
  _enterSite = () => {};

  render() {
    return (
      <div>
        <Sidebar />
        <Grid fluid={true}>
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
              <hr />
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default BioView;
