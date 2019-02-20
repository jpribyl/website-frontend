//@format
//TODO: make live app / blogpost card read from json?
//TODO: make carousel read from json?
//TODO: make carousel view default but have "view all" option
import React, {Component} from 'react';
import {Grid, Row, Image} from 'react-bootstrap';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import Carousel from '../../components/atoms/carousel/';

//import soopLogo from '../../assets/img/icons/soop_dino.png';
import soopBowl from '../../assets/img/icons/soop_bowl.png';
import atomSimple from '../../assets/img/icons/atom-512.png';
import blackHole from '../../assets/img/icons/black_hole.png';
import taylorExpand from '../../assets/img/icons/taylor_series.png';
import flappyBird from '../../assets/img/icons/flapp_bird.png';
import antenna from '../../assets/img/icons/antenna.png';

class PortfolioView extends Component {
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
      headerText: 'PORTFOLIO',
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
          <h2>Live Apps</h2>
          <Row className="well padForGrid">
            <Card
              dim={true}
              className="link"
              id="soopLink"
              category="This app scrapes the web to find public events with free snacks. User likes and dislikes help train a neural network to categorize future events."
              title="Daily Soup"
              xs={12}
              md={4}
              to="/soop"
              content={
                <Image className="centered" src={soopBowl} rounded responsive />
              }
            />
          </Row>
          <h2>Blog Posts</h2>
          <Row className="well padForGrid">
            <Card
              dim={true}
              id={'homeNetwork'}
              category="Coupling a long range antenna receiver with a raspberry pi, a Digital Ocean droplet running openVPN and Pi-Hole, and a Squid caching proxy makes it possible to have a reliable, secure, and free home network"
              title="Public WiFi at Home"
              xs={12}
              md={4}
              content={
                <Image className="centered" src={antenna} rounded responsive />
              }
            />
            <Card
              dim={true}
              id="soopBlog"
              category="This post accompanies the live app and highlights the technologies involved."
              title="Daily Soup Writeup"
              xs={12}
              md={4}
              content={
                <Image className="centered" src={soopBowl} rounded responsive />
              }
            />
            <Card
              dim={true}
              id={'analogFlappyBird'}
              category='This looks at using an Arduino and C++ to drive a laser projecting an analog version of the popular "Flappy Bird" game onto a wall'
              title="Flappy Bird"
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={flappyBird}
                  rounded
                  responsive
                />
              }
            />
          </Row>
          <Row />
          <Row className="well padForGrid">
            <Card
              dim={true}
              id={'neutronStarCore'}
              category="Using a taylor expansion to estimate density and pressure at the center of a neutron star."
              title="Neutron Star Core"
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={taylorExpand}
                  rounded
                  responsive
                />
              }
            />
            <Card
              dim={true}
              id={'moreSophStars'}
              category="We do not know exactly what physics contols the inner workings of neutron stars. However, people from around the world have tried to guess at the solutions to an unknown equation of state. This post highlights a collaboration with Princeton's Kent Yagi to model some ofthese solutions"
              title="More Sophisticated Stars"
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={blackHole}
                  rounded
                  responsive
                />
              }
            />
            <Card
              dim={true}
              id={'simpleNeutronStars'}
              category="Using Mathematica to model neutron stars with a naively simple polytropic equation of state"
              title="Simple Neutron Stars"
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={atomSimple}
                  rounded
                  responsive
                />
              }
            />
          </Row>
              <h2>Possible Future Blog Post Style</h2>
          <Row className="well padForGrid">
            <Carousel />
          </Row>
        </Grid>
      </div>
    );
  }
}
export default PortfolioView;
