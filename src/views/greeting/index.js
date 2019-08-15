//@format
import React, { Component } from "react"
import Switch from "react-toggle-switch"
import { AwesomeButton } from "react-awesome-button"
import { Grid, Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"

import Greeting from "../../components/organisms/d3/greeting"
import UserGeneratedGreeting from "../../components/organisms/d3/userPickGreeting/"
import { getAuthRead } from "../../actions/auth"
import { name, title } from "../../objects/signature"

export default class GreetingView extends Component {
  constructor(props) {
    super()

    let width = window.innerWidth * 0.89
    let height
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.7
    } else {
      height = window.innerHeight * 0.59
    }

    this.state = {
      animate: true,
      numPoints: 80,
      duration: 22000,
      width: width,
      height: height,
      maxRadius: 40,
      margin: {
        top: 30,
        right: window.innerWidth * 0.02,
        bottom: 30,
        left: window.innerWidth * 0.02
      }
    }
  }

  _togglAnimate = () => {
    this.setState({ animate: !this.state.animate })
  }

  _enterSite = () => {}

  render() {
    return (
      <Grid className="greeting" fluid={true}>
        <Row>
          <Greeting
            numPoints={this.state.numPoints}
            duration={this.state.duration}
            width={this.state.width}
            height={this.state.height}
            maxRadius={this.state.maxRadius}
            margin={this.state.margin}
            animate={this.state.animate}
          />
        </Row>
        <Row>
          <hr />
          <Col className="signature" lg={3} sm={4} xs={8}>
            <h1 className="name">{name}</h1>
            <h3 className="title">{title}</h3>
          </Col>
          <Col lg={3} sm={4} xs={12}>
            <div id="enterSite">
              <Link to="/bio">
                <AwesomeButton
                  id="enterSiteButton"
                  type="primary"
                  bubbles={true}
                  action={this._enterSite}>
                  ENTER SITE
                </AwesomeButton>
              </Link>
            </div>
          </Col>
          <UserGeneratedGreeting
            width={this.state.width}
            height={this.state.height}
            maxRadius={this.state.maxRadius}
            margin={this.state.margin}
            duration={this.state.duration}
            animate={this.state.animate}
          />
          <Col lg={2} sm={4} xs={12}>
            <div className="animation toggle">
              <h3>animate</h3>
              <Switch
                id="animationToggle"
                onClick={this._togglAnimate}
                on={this.state.animate}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
