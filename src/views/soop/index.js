//@format
import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import Profile from '../../assets/img/profile.jpg';
import TechStack from '../../components/molecules/techstack/';
import DayBar from '../../components/molecules/daybar/';
import ProfInterests from '../../components/molecules/profinterests/';
import ExpandableList from '../../components/atoms/expandablelist/';

class SoopView extends Component {
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

    let day = new Date().toLocaleDateString();

    this.state = {
      day: day,
      headerText: 'DAILY SOUP',
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

  render() {
    let soop;
    if (this.props.soop.allSoop) {
      soop = this.props.soop.allSoop
        .filter(row => {
          return row.day === this.state.day;
        })
        .map(row => {
          row.name = (
            <div className="soopHeader">
              <Col xs={12} className="soopHeaderTitle">
                {row.title}
              </Col>
              <Col xs={12} sm={5}>
                Keywords: <span className="soopHeader">{row.food}</span>
              </Col>
              <Col xs={12} sm={5}>
                Event Score: <span className="soopHeader">{row.score}</span>
              </Col>
            </div>
          );
          row.expandedText = (
            <div>
              <h4>Summary:</h4>
              {row.details}
              <hr />
              <div>
                <Col xs={12} sm={9} className="soopButtonCol">
                  <Button bsStyle="warning" href={row.outUrl}>
                    Event Link (external)
                  </Button>
                </Col>
                <Col xs={3} sm={1} className="soopButtonCol">
                  <Button bsStyle="success">Like</Button>
                </Col>
                <Col xs={3} sm={2} className="soopButtonCol">
                  <Button bsStyle="danger">Dislike</Button>
                </Col>
              </div>
            </div>
          );
          row.id = row.id.toString();
          return row;
        });
    } else {
      soop = [
        {
          name: 'loading...'
        }
      ];
    }

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
                title="Event List"
                xs={12}
                content={
                  <Col>
                    <DayBar
                      activeKey={this.state.day}
                      handleSelect={day => {
                        this.setState({day: day});
                      }}
                    />
                    <ExpandableList
                      className="soopList"
                      listData={soop}
                      logoSize={0}
                    />
                  </Col>
                }
              />
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    soop: state.soop
  };
}

export default connect(mapStateToProps)(SoopView);
