//@format
import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import Profile from '../../assets/img/profile.jpg';
import TechStack from '../../components/molecules/techstack/';
import ProfInterests from '../../components/molecules/profinterests/';

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
            </div>
            <hr className="hrLarge" />
          </Row>
          <div className="well">
            <Row className="padForGrid">
              <Card
                xl={2}
                md={3}
                xs={12}
                content={
                  <Image
                    className="centered"
                    src={Profile}
                    rounded
                    responsive
                  />
                }
              />
              <Card
                title="About Me"
                xl={10}
                md={9}
                xs={12}
                content={
                  <div>
                    <p>
                      I <b>grew up in Houston</b>, Texas before heading out to
                      Montana for school. I got a <b>degree in Physics</b> from
                      MSU Bozeman in 2018.
                    </p>

                    <p>
                      My undergraduate research involved
                      <b> modeling Neutron stars</b> in alternate theories of
                      gravity and <b>training neural networks </b>
                      to recognize glitches in gravitational wave data
                    </p>

                    <p>
                      I am currently living in Bozeman with my dog, Fox and
                      <b> working as a software developer</b> at The Business
                      Garage
                    </p>

                    <p className="bigText">
                      I am looking for part time work to supplement my current
                      job.
                    </p>
                  </div>
                }
              />
            </Row>
            <Row className="padForGrid">
              <Card
                title="Technical Stack"
                xs={12}
                md={6}
                content={<TechStack />}
              />
              <Card
                title="Other Interests"
                xs={12}
                md={6}
                content={<ProfInterests />}
              />
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
export default BioView;
