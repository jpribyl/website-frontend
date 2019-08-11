//@format
import React, {Component} from 'react';
import {Grid, Row, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import {Tooltip} from 'react-tippy';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import Dimmer from '../../components/atoms/dimmer';

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
import openVPN from '../../assets/img/icons/openvpn.png';
import k8s from '../../assets/img/icons/kubernetes.png';
import route53 from '../../assets/img/icons/route53.png';
import sentiment from '../../assets/img/icons/sentimentanalysis.png';
import fourier from '../../assets/img/icons/ftransform.png';
import curvefit from '../../assets/img/icons/curvefit.png';
import rpi from '../../assets/img/icons/rpi.png';
import react from '../../assets/img/icons/react.png';
import adonis from '../../assets/img/icons/adonisjs.png';
import docker from '../../assets/img/icons/docker.png';
import loadtest from '../../assets/img/icons/loadtest.png';
import lambda from '../../assets/img/icons/lambda.png';
import redis from '../../assets/img/icons/redis.png';

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
            <div className="well padForGrid">
              <Row className="padForGrid">
                <Card
                  no_separator
                  xs={12}
                  content={
                    <div className="padText">
                      <h4>
                        Blog posts are forthcoming for all of these. In the mean
                        time, if there is one that interests you, don't hesitate
                        to reach out.
                      </h4>
                      <p>Last Updated: 08/10/2019</p>
                      <a href="mailto:pribylsnbits@gmail.com">
                        <span className="technologyButton centerJustifyNoMargin">
                          <AwesomeButton
                            style={{width: '100%'}}
                            type="primary"
                            bubbles={true}>
                            Get in touch
                          </AwesomeButton>
                        </span>
                      </a>
                    </div>
                  }
                />
              </Row>
            </div>
            <h2 style={{paddingLeft: '10px'}}> Cloud Work & Devops</h2>
            <Row className="well padForGrid">
              <Row className="padForGrid">
                <Card
                  id="baremetalk8s"
                  category="This may be the coolest project that I have ever done. I ordered a bunch of hardware with my roommate and built a kubernetes cluster out of raspberry pi's. So far we have 3 workers. We are using Weave as a network policy controller and Traeffik to handle ingress / load balancing."
                  title="Bare Metal Kubernetes"
                  xs={12}
                  content={
                    <Image className="centered" src={k8s} rounded responsive />
                  }
                />
                <Card
                  id={'dockerdeploy'}
                  category="This looks using automated builds, tests, and webhooks to kick off a robust deployment to the kubernetes cluster with a git push. Different repositories correspond to different pipelines."
                  title="Dockerized Deployments"
                  xs={12}
                  md={7}
                  content={
                    <Image
                      className="centered"
                      src={docker}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  id={'distloadtest'}
                  category="Armed with a small budget and a lot of grit, I wrote an open source, distributed load test. It works by automatically spinning up ec2 servers, provisioning them with the Locust framework, simulating user behavior, and plotting the results."
                  title="Distributed Load Testing"
                  xs={12}
                  md={5}
                  content={
                    <Image
                      className="centered"
                      src={loadtest}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  id="opnvpnDO"
                  category="VPN providers are notoriously nefarious. However, VPNs are incredibly useful. For this project, I followed an arstechnica guide on rolling out an OpenVPN server to a Digital Ocean Droplet"
                  title="Roll Your Own VPN"
                  xs={12}
                  md={5}
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
                  id={'becanaryRls'}
                  category="Sometimes you only want to release a new feature to a small percentage of users. Here, we will use AWS's Route 53 to accomplish this through weighted DNS resolution."
                  title="Canary Releases (Backend Only)"
                  xs={12}
                  md={7}
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
              <Row className="padForGrid">
                <Card
                  id={'fecanaryRls'}
                  category="Although sufficient for backend canary releases, DNS based solutions have a few shortcomings when A/B testing. To solve them, we will use a newer technology. Lambda@edge allows a lambda function to sit at the edge of your cloudfront and direct traffic intelligently."
                  title="A / B Testing"
                  xs={12}
                  md={6}
                  content={
                    <Image
                      className="centered"
                      src={lambda}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  id={'redisCache'}
                  category="When load times for a production dashboard started getting a little high, I was able to cut them down by 75% with the introduction of a redis cache. Additionally, I introduced a queue to handle long running processes like push notifications."
                  title="Redis Cache / Queue"
                  xs={12}
                  md={6}
                  content={
                    <Image
                      className="centered"
                      src={redis}
                      rounded
                      responsive
                    />
                  }
                />
              </Row>
            </Row>
            <ScrollableAnchor id={'projects#datascience'}>
              <div id="datascience">
                <h2 style={{paddingLeft: '10px'}}>Data Science</h2>
              </div>
              <Row className="well padForGrid">
                <Row className="padForGrid">
                  <Card
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
                <Row className="padForGrid">
                  <Card
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
                <Row className="padForGrid">
                  <Card
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
                  <Card
                    id={'fftransforms'}
                    category="Transforming data from one domain to another is a powerful filtering technique. The classic example is to transform between the frequency domain and the time domain in order to remove noise from a signal."
                    title="Fourier Transforms"
                    xs={12}
                    md={5}
                    content={
                      <Image
                        className="centered"
                        src={fourier}
                        rounded
                        responsive
                      />
                    }
                  />
                  <Card
                    id={'sntAnlysis'}
                    category="Regressions are one of the most commonly used techniques in the realm of data science. Here, I look at a simple implementation of SciPy's powerful curve_fit method."
                    title="Curve Fitting"
                    xs={12}
                    md={7}
                    content={
                      <Image
                        className="centered"
                        src={curvefit}
                        rounded
                        responsive
                      />
                    }
                  />
                </Row>
              </Row>
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects#opensource'}>
              <div id="opensource">
                <h2 style={{paddingLeft: '10px'}}>Open Source</h2>
              </div>
              <Row className="well padForGrid">
                <Card
                  id={'reactmetismenu'}
                  category="The sidebar nav on this site uses react-metismenu. However, the component did not support navigating to the first element of a menu item with sub-items without requiring two clicks. So, I forked the repo, added this functionality and opened a PR."
                  title="React-MetisMenu Fork"
                  xs={12}
                  md={6}
                  content={
                    <Image
                      className="centered"
                      src={react}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
                  id={'adonisjsairtable'}
                  category="One of our projects uses a newer node framework called Adonis and required an Airtable integration. Because the framework is relatively new, no one had written a provider for the integration so I wrote one and published it to npm."
                  title="Adonisjs Airtable Provider"
                  xs={12}
                  md={6}
                  content={
                    <Image
                      className="centered"
                      src={adonis}
                      rounded
                      responsive
                    />
                  }
                />
                <Card
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
                {
                  //<Dimmer>
                  //<Link to="/soop">
                }
                <Card
                  id="soopLink"
                  category="This app scrapes the web to find public events with free snacks. User likes and dislikes help train a neural network to categorize future events."
                  title="Free Food"
                  xs={12}
                  md={6}
                  content={
                    <Image
                      className="centered"
                      src={soopBowl}
                      rounded
                      responsive
                    />
                  }
                />
                {
                  //</Link>
                  //</Dimmer>
                }
                <Card
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
                <h2 style={{paddingLeft: '10px'}}>Hardware</h2>
              </div>
              <Row className="well padForGrid">
                <Card
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
                <h2 style={{paddingLeft: '10px'}}>Physics</h2>
              </div>
              <Row className="well padForGrid">
                <Card
                  id={'neutronStarCore'}
                  category="Even after guessing at the equations of state, we do not know what happens at the very center of a star. Our estimates break down more as we get closer and closer to the center. In order to avoid this problem, we may use a taylor expansion to estimate density and pressure."
                  title="Neutron Star Core"
                  xs={12}
                  md={12}
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
                  md={6}
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
                  id={'moreSophStars'}
                  category="We do not know exactly what physics contols the inner workings of neutron stars. However, people from around the world have tried to guess at the solutions to an unknown equation of state. This post highlights a collaboration with Princeton's Kent Yagi to model some ofthese solutions"
                  title="More Sophisticated Stars"
                  xs={12}
                  md={6}
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
                  no_separator
                  xs={12}
                  md={12}
                  content={
                    <Link to="/resume">
                      <Tooltip
                        title="Touch eyeballs to screen for cheap laser surgery"
                        arrow={true}
                        size="big">
                        <span className="technologyButton centerJustifyNoMargin">
                          <AwesomeButton
                            style={{width: '100%'}}
                            type="primary"
                            bubbles={true}>
                            Check out my resume
                          </AwesomeButton>
                        </span>
                      </Tooltip>
                    </Link>
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
