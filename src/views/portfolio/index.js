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
import webServer from '../../assets/img/icons/servers.svg';
import intelNuc from '../../assets/img/icons/minipc.png';
import lightbulb from '../../assets/img/icons/lightbulb.svg';
import videoRec from '../../assets/img/icons/videoRec.png';
import cnn from '../../assets/img/icons/cnnetwork.png';
import dataVis from '../../assets/img/icons/dataVis.png';
import textSummary from '../../assets/img/icons/summarize-icon-9.jpg.png';
import mathModel from '../../assets/img/icons/mathModel.png';
import speechToText from '../../assets/img/icons/speechToText.png';

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
          <h2>Data Wrangling</h2>
          <Row className="well padForGrid">
            <Row>
              <Card
                dim={false}
                id="commitRecEngine"
                category="One of Triple Tree's projects features a Digital Library. I was tasked with building a recommendation engine to help users find videos that match their interests."
                title="Recommending Videos"
                xs={12}
                md={4}
                content={
                  <Image
                    className="centered"
                    src={videoRec}
                    rounded
                    responsive
                  />
                }
              />
              <Card
                dim={false}
                id={'gravityCnn'}
                category="During my time as an undergrad, I worked with Neil Cornish to build a convolutional neural network capable of classifying glitches in gravitational wave data."
                title="CNN Glitch Classification"
                xs={12}
                md={4}
                content={
                  <Image className="centered" src={cnn} rounded responsive />
                }
              />
              <Card
                dim={false}
                id={'pintpassDataVis'}
                category="This post looks at using the D3.js in order to render live, interactive stats on a production app"
                title="Visualizing Live Data"
                xs={12}
                md={4}
                content={
                  <Image
                    className="centered"
                    src={dataVis}
                    rounded
                    responsive
                  />
                }
              />
            </Row>
            <Row>
              <Card
                dim={false}
                id={'textSummarization'}
                category=""
                title="Text Summarization"
                xs={12}
                md={4}
                content={
                  <Image
                    className="centered"
                    src={textSummary}
                    rounded
                    responsive
                  />
                }
              />
              <Card
                dim={false}
                id={'mathModelStars'}
                category=""
                title="Modeling Neutron Stars"
                xs={12}
                md={4}
                content={
                  <Image
                    className="centered"
                    src={mathModel}
                    rounded
                    responsive
                  />
                }
              />
              <Card
                dim={false}
                id={'spkrDiarization'}
                category=""
                title="Speaker Diarization"
                xs={12}
                md={4}
                content={
                  <Image
                    className="centered"
                    src={speechToText}
                    rounded
                    responsive
                  />
                }
              />
            </Row>
          </Row>
          <h2>Free Stuff</h2>
          <Row className="well padForGrid">
            <Card
              dim={true}
              className="link"
              id="soopLink"
              category="This app scrapes the web to find public events with free snacks. User likes and dislikes help train a neural network to categorize future events."
              title="Free Food"
              xs={12}
              md={4}
              to="/soop"
              content={
                <Image className="centered" src={soopBowl} rounded responsive />
              }
            />
            <Card
              dim={false}
              id={'homeNetwork'}
              category="Coupling a long range antenna with a raspberry pi, a Digital Ocean droplet running openVPN and Pi-Hole, and a local Squid caching proxy makes it possible to have a reliable, secure, and free home network."
              title="Free WiFi"
              xs={12}
              md={4}
              content={
                <Image className="centered" src={antenna} rounded responsive />
              }
            />
            <Card
              dim={false}
              id={'webHosting'}
              category="For a long time, I hosted this page with Bluehost. However, a recent post on Hacker News taught me that it is possible to host a static site for free through GitHub Pages."
              title="Free Webhosting"
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={webServer}
                  rounded
                  responsive
                />
              }
            />
          </Row>
          <h2>Hardware</h2>
          <Row className="well padForGrid">
            <Card
              dim={false}
              id="smartHome"
              title="Unix Based Smart Home"
              category="I want to use smart technology while protecting my privacy. So, I built a webserver that allows me to control my home appliances. Then I locked down the appliances to prevent them from 'phoning home' to Google or anyone else."
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={lightbulb}
                  rounded
                  responsive
                />
              }
            />
            <Card
              dim={false}
              id={'analogFlappyBird'}
              category='This looks at using an Arduino and C++ to drive a laser projecting an analog version of the popular "Flappy Bird" game onto a wall.'
              title="Analog Flappy Bird"
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
            <Card
              dim={false}
              id="desktopBuild"
              category="The computer that I use every day at work is a fanless Intel NUC that dual boots Windows 10 and Arch linux. So far I have been very happy with the build. This post discusses the components that I used."
              title="Building a Mini PC"
              xs={12}
              md={4}
              content={
                <Image className="centered" src={intelNuc} rounded responsive />
              }
            />
          </Row>
          <Row />
          <h2>Physics</h2>
          <Row className="well padForGrid">
            <Card
              dim={false}
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
            <Card
              dim={false}
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
              dim={false}
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
          </Row>
        </Grid>
      </div>
    );
  }
}
export default PortfolioView;
