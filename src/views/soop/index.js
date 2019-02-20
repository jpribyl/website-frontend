//@format
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import DayBar from '../../components/molecules/daybar/';
import SoopList from '../../components/molecules/sooplist';
import SoopListTable from '../../components/molecules/sooplisttable';
import {likeSoop, dislikeSoop} from '../../actions/soop';

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
      },
      dislikeDisabled: [],
      likeDisabled: [],
      expanded: null
    };
  }

  render() {
    const _selectSoopRow = e => {
      const id = e.target.id;
      if (this.state.activeSoop === id) {
        this.setState({
          activeSoop: -1
        });
      } else {
        this.setState({
          activeSoop: id
        });
      }
    };

    const _dislikeSoop = e => {
      const data = {
        user_id: 0,
        object_id: e.id
      };
      this.props.actions.dislikeSoop.apply(this.props.auth, data);

      var dislikeDisabled = this.state.dislikeDisabled;
      dislikeDisabled.push(e.id);
      this.setState({dislikeDisabled: dislikeDisabled});
    };

    const _likeSoop = e => {
      const data = {
        user_id: 0,
        object_id: e.id
      };
      this.props.actions.likeSoop.apply(this.props.auth, data);

      var likeDisabled = this.state.likeDisabled;
      likeDisabled.push(e.id);
      this.setState({likeDisabled: likeDisabled});
    };

    const _handleExpand = row => {
      var expanded = {...this.state.expanded};
      if (expanded[row.viewIndex]) {
        expanded[row.viewIndex] = !expanded[row.viewIndex];
      } else {
        expanded[row.viewIndex] = true;
      }

      this.setState({
        expanded: expanded
      });
    };

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
                        this.setState({day: day, expanded: null});
                      }}
                    />
                    <SoopListTable
                      listData={this.props.soop}
                      expanded={this.state.expanded}
                      handleExpand={_handleExpand}
                      dislikeDisabled={this.state.dislikeDisabled}
                      likeDisabled={this.state.likeDisabled}
                      day={this.state.day}
                      onLike={_likeSoop}
                      onDislike={_dislikeSoop}
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
    auth: state.auth,
    soop: state.soop
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      likeSoop: bindActionCreators({apply: likeSoop}, dispatch),
      dislikeSoop: bindActionCreators({apply: dislikeSoop}, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoopView);
