//@format
import React, {Component} from 'react';
import Switch from 'react-toggle-switch';
import {AwesomeButton} from 'react-awesome-button';
import {Grid, Row, Col} from 'react-bootstrap';

import Greeting from '../../components/organisms/d3/greeting';

const styles = {};

class GreetingView extends Component {
  constructor(props) {
    super();
    this.state = {
      animate: true
    };
  }
  _togglAnimate = () => {
    this.setState({animate: !this.state.animate});
  };
  render() {
    return (
      <Grid className="greeting" fluid={true}>
        <Row>
          <Greeting animate={this.state.animate} />
        </Row>
        <Row>
          <hr />
          <Col className="signature" sm={4} xs={8}>
            <h1 className="name">john pribyl</h1>
            <h2 className="title">data scientist</h2>
          </Col>
          <Col sm={4} smPush={4} xs={4}>
            <div className="animation toggle">
              <h3>animate</h3>
              <Switch
                id="animationToggle"
                onClick={this._togglAnimate}
                on={this.state.animate}
              />
            </div>
          </Col>
          <Col sm={4} smPull={4} xs={8}>
            <div id="enterSite">
              <AwesomeButton id="enterSiteButton" type="primary" bubbles={true}>
                ENTER SITE
              </AwesomeButton>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default GreetingView;
