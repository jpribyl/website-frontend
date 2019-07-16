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
import {MENU_WIDTH} from '../../config.js';

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
import openVPN from '../../assets/img/icons/openvpn.png';
import k8s from '../../assets/img/icons/kubernetes.png';
import route53 from '../../assets/img/icons/route53.png';
import sentiment from '../../assets/img/icons/sentimentanalysis.png';
import rpi from '../../assets/img/icons/rpi.png';
import Latex from 'react-latex';
import ScrollableAnchor from '../../components/atoms/scrollableanchor';

class ProjectsView extends Component {
  constructor(props) {
    super();

    let height, width, numPoints;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.2;
      width = (window.innerWidth - MENU_WIDTH) * 0.88;
      numPoints = 40;
    } else {
      height = window.innerHeight * 0.1;
      width = window.innerWidth * 0.7;
      numPoints = 15;
    }

    this.state = {
      headerText: 'PROJECTS',
      duration: 50000,
      animate: true,
      numPoints: numPoints,
      width: width,
      height: height,
      maxRadius: 20,
      margin: {
        top: 30,
        right: (window.innerWidth - MENU_WIDTH) * 0.02,
        bottom: 30,
        left: (window.innerWidth - MENU_WIDTH) * 0.02
      }
    };
  }

  render() {
    return (
      <ScrollableAnchor id={'projects#devops'}>
        <div id="devops" />
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
            <h4>
              Here are some of the projects that I have worked on. I have
              separated them somewhat arbitrarily into categories.
            </h4>
            <h2>Cloud Work & Dev Ops</h2>
            <Row className="well padForGrid">
              <Row>
                <Card
                  dim={false}
                  id="baremetalk8s"
                  category="This may be the coolest project that I have ever done. I ordered a bunch of hardware with my roommate and built a kubernetes cluster out of raspberry pi's. So far we have 3 workers. We are using Weave as a network policy controller and Traeffik to handle ingress / load balancing."
                  title="Bare Metal Kubernetes"
                  xs={12}
                  content={
                    <Image className="centered" src={rpi} rounded responsive />
                  }
                />
                <Card
                  dim={false}
                  id="opnvpnDO"
                  category="VPN providers are notoriously nefarious. However, VPNs are incredibly useful. For this project, I followed an arstechnica guide on rolling out an OpenVPN server to a Digital Ocean Droplet"
                  title="Roll Your Own VPN"
                  xs={12}
                  md={4}
                  content={
                    <Image
                      className="centered"
                      src={openVPN}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  dim={false}
                  id={'k8sDeployment'}
                  category="This looks using automated builds, tests, and webhooks to kick off a bare metal kubernetes deployment with a git push. Different repositories may correspond to different pipelines."
                  title="Kubernetes Pipelines"
                  xs={12}
                  md={4}
                  content={
                    <Image className="centered" src={k8s} rounded responsive />
                  }
                />
                <Card
                  dim={false}
                  id={'canaryRls'}
                  category="Sometimes you only want to release a new feature to a small percentage of users. Here, we will use AWS's Route 53 to accomplish this through weighted DNS resolution."
                  title="Canary Releases"
                  xs={12}
                  md={4}
                  content={
                    <Image
                      className="centered"
                      src={route53}
                      rounded
                      responsive
                    />
                  }
                />
              </Row>
            </Row>
            <ScrollableAnchor id={'projects#datascience'}>
              <div id="datascience">
                <h2>Data Science</h2>
              </div>
              <Row className="well padForGrid">
                <Row>
                  <Card
                    dim={false}
                    id="commitRecEngine"
                    category="One project that I am working on features a video library. So, I built a simple recommendation engine to help users find videos matching their interests."
                    title="Recommending Videos"
                    xs={12}
                    md={5}
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
                    md={7}
                    content={
                      <Image
                        className="centered"
                        src={cnn}
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
                    category="Python has some really amazing text processing libraries. I was able to leverage NLTK, Pandas, and SKLearn in order to build a summarizer that intelligently segments text before running a tfidf based summarization algorithm."
                    title="Text Summarization"
                    xs={12}
                    md={8}
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
                    id={'pintpassDataVis'}
                    category="This post looks at using the D3.js in order to render live, interactive stats on a production app."
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
                    id={'mathModelStars'}
                    category="This is a non-techincal introduction to the cutting edge of science. We will discuss the ways that physics has changed in the past 100 years and why everyone is so excited about gravity these days."
                    title="Modeling Neutron Stars"
                    xs={12}
                    md={6}
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
                    id={'sntAnlysis'}
                    category="There are some very large open datasets containing categorized free form text. I used SKLearn to train a simple model on one of these datasets and used it to categorize text inputs collected from a production app."
                    title="Sentiment Analysis"
                    xs={12}
                    md={6}
                    content={
                      <Image
                        className="centered"
                        src={sentiment}
                        rounded
                        responsive
                      />
                    }
                  />
                </Row>
              </Row>
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects#freestuff'}>
              <div id="freestuff">
                <h2>Free Stuff</h2>
              </div>
              <Row className="well padForGrid">
                <Card
                  dim={false}
                  id={'homeNetwork'}
                  category="Coupling a long range antenna with a raspberry pi, a Digital Ocean droplet running openVPN and Pi-Hole, and a local Squid caching proxy makes it possible to have a reliable, secure, and free home network."
                  title="Free WiFi"
                  xs={12}
                  md={12}
                  content={
                    <Image
                      className="centered"
                      src={antenna}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  dim={true}
                  className="link"
                  id="soopLink"
                  category="This app scrapes the web to find public events with free snacks. User likes and dislikes help train a neural network to categorize future events."
                  title="Free Food"
                  xs={12}
                  md={6}
                  to="/soop"
                  content={
                    <Image
                      className="centered"
                      src={soopBowl}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  dim={false}
                  id={'webHosting'}
                  category="For a long time, I hosted this page with Bluehost. However, a recent post on Hacker News taught me that it is possible to host a static site for free through GitHub Pages."
                  title="Free Webhosting"
                  xs={12}
                  md={6}
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
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects#hardware'}>
              <div id="hardware">
                <h2>Hardware</h2>
              </div>
              <Row className="well padForGrid">
                <Card
                  dim={false}
                  id="smartHome"
                  title="Unix Based Smart Home"
                  category="I want to use smart technology while protecting my privacy. So, I built a webserver that allows me to control my home appliances. Then I locked down the appliances to prevent them from 'phoning home' to Google or anyone else."
                  xs={12}
                  md={12}
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
                  md={7}
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
                  md={5}
                  content={
                    <Image
                      className="centered"
                      src={intelNuc}
                      rounded
                      responsive
                    />
                  }
                />
              </Row>
              <Row />
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects#physics'}>
              <div id="physics">
                <h2>Physics</h2>
              </div>
              <Row className="well padForGrid">
                <Card
                  dim={false}
                  id={'moreSophStars'}
                  category="We do not know exactly what physics contols the inner workings of neutron stars. However, people from around the world have tried to guess at the solutions to an unknown equation of state. This post highlights a collaboration with Princeton's Kent Yagi to model some ofthese solutions"
                  title="More Sophisticated Stars"
                  xs={12}
                  md={12}
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
                  id={'simpleNeutronStars'}
                  category={
                    <div>
                      Here, I use Mathematica to model stars with a simple
                      polytropic equation of state of the form:
                      <h5 style={{textAlign: 'center'}}>
                        <Latex>{'$$ P = K \\rho^{\\frac{n+1}{n}} $$'}</Latex>
                      </h5>
                      Where P is pressure, K is a proportionality constant,
                      <Latex>$\rho$</Latex> is density, and n is the polytropic
                      index.
                    </div>
                  }
                  title="Simple Neutron Stars"
                  xs={12}
                  md={7}
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
                  id={'neutronStarCore'}
                  category="Even after guessing at the equations of state, we do not know what happens at the very center of a star. Our estimates break down more as we get closer and closer to the center. In order to avoid this problem, we may use a taylor expansion to estimate density and pressure."
                  title="Neutron Star Core"
                  xs={12}
                  md={5}
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
            </ScrollableAnchor>
          </Grid>
        </div>
      </ScrollableAnchor>
    );
  }
}
export default ProjectsView;
