//@format
import React, {Component} from 'react';
import {Grid, Row, Image} from 'react-bootstrap';
import Header from '../../components/organisms/d3/header';
import Sidebar from '../../components/atoms/sidebar';
import Card from '../../components/atoms/card';
import Profile from '../../assets/img/profile.jpg';
import {techStackColumns, techStackData} from '../../objects/techstack';
import ExpandableTable from '../../components/atoms/expandabletable/';
import {Helpers} from '../../utils.js';
import {Link} from 'react-router-dom';
import {AwesomeButton} from 'react-awesome-button';
import {Tooltip} from 'react-tippy';

class SkillsView extends Component {
  constructor(props) {
    super();

    let height, width, numPoints;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.2;
      width = (window.innerWidth - 200) * 0.88;
      numPoints = 40;
    } else {
      height = window.innerHeight * 0.1;
      width = window.innerWidth * 0.7;
      numPoints = 15;
    }

    this.state = {
      headerText: 'SKILLS',
      animate: true,
      duration: 50000,
      numPoints: numPoints,
      width: width,
      height: height,
      maxRadius: 20,
      margin: {
        top: 30,
        right: (window.innerWidth - 200) * 0.02,
        bottom: 30,
        left: (window.innerWidth - 200) * 0.02
      },
      techStackExpanded: null,
      profInterestsExpanded: null
    };
  }

  render() {
    return (
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
          <div className="well">
            <Row className="padForGrid">
              <Card
                no_separator
                xs={12}
                content={
                  <div className="padText">
                    <p>
                      I <b>love learning</b> new things and am excited to
                      continue growing this list to stay current with the most
                      effective frameworks and standards
                    </p>
                  </div>
                }
              />
              <Card
                title="Technical Stack"
                xs={12}
                md={12}
                content={
                  <ExpandableTable
                    expanded={this.state.techStackExpanded}
                    handleExpand={row =>
                      Helpers.handleExpand(this, row, 'techStackExpanded')
                    }
                    showPagination={false}
                    className={'techStack'}
                    data={techStackData}
                    columns={techStackColumns}
                  />
                }
              />
            </Row>
            <Row className="padForGrid">
              <Card
                no_separator
                xs={12}
                md={12}
                content={
                  <Tooltip title="As seen on TV" arrow={true} size="big">
                    <Link to="/projects">
                      <span className="technologyButton centerJustifyNoMargin">
                        <AwesomeButton
                          style={{width: '100%'}}
                          type="primary"
                          bubbles={true}>
                          Continue to Projects
                        </AwesomeButton>
                      </span>
                    </Link>
                  </Tooltip>
                }
              />
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
export default SkillsView;
