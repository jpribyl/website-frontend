//@format
import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "../../components/organisms/d3/header";
import Sidebar from "../../components/atoms/sidebar";
import Card from "../../components/atoms/card";
import Profile from "../../assets/img/profile.jpg";
import ModalGallery from "../../components/molecules/modalgallery";
import bioGalleryPhotos from "../../objects/biophotos";
import { AwesomeButton } from "react-awesome-button";
import { Tooltip } from "react-tippy";

//import ExpandableTable from '../../components/atoms/expandabletable/';
//import {
//profInterestsColumns,
//profInterestsData
//} from '../../objects/professionalinterests';
//import {Helpers} from '../../utils.js';

class BioView extends Component {
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
      headerText: "BIO",
      duration: 50000,
      animate: true,
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
                shouldComponentUpdate={false}
                xl={2}
                md={4}
                sm={4}
                xs={5}
                no_separator
                content={
                  <Image
                    className="profilePic"
                    src={Profile}
                    rounded
                    responsive
                  />
                }
              />
              <Card
                title="About Me"
                xl={10}
                md={8}
                sm={8}
                xs={12}
                content={
                  <div className="padText">
                    <p>
                      I <b>grew up in Houston</b>, Texas before heading out to
                      Montana for school.
                    </p>
                    <hr style={{ width: "70%" }} />
                    <p>
                      I got a <b>degree in Physics</b> from MSU Bozeman in 2018.
                    </p>
                    <hr style={{ width: "80%" }} />
                    <p>
                      My undergraduate research involved
                      <b> modeling Neutron stars</b> in alternate theories of
                      gravity and <b>training neural networks </b>
                      to recognize glitches in gravitational wave data.
                    </p>
                    <hr style={{ width: "70%" }} />
                    <p>
                      I really enjoy{" "}
                      <b>math, statistics, and automating the boring stuff.</b>
                    </p>
                    <hr style={{ width: "80%" }} />

                    <p>
                      Currently, I am <b>living in Bozeman with my dog, Fox.</b>
                    </p>
                    <hr style={{ width: "70%" }} />
                    <p>
                      My favorite fictional character is <b>Kilgore Trout.</b>
                    </p>

                    {
                      //<p className="bigText">
                      //I am looking for part time work to supplement my current
                      //job.
                      //</p>
                    }
                  </div>
                }
              />
            </Row>
            <Row className="padForGrid">
              <Card
                title="I prefer writing code to writing copy, but here are some places I've been:"
                xs={12}
                md={12}
                content={
                  <ModalGallery photos={bioGalleryPhotos} />
                  //<ExpandableTable
                  //expanded={this.state.profInterestsExpanded}
                  //handleExpand={row => {
                  //Helpers.handleExpand(this, row, 'profInterestsExpanded');
                  //}}
                  //columns={profInterestsColumns}
                  //showPagination={false}
                  //data={profInterestsData}
                  //className={'profInterests'}
                  ///>
                }
              />
            </Row>
            <Row className="padForGrid">
              <Card
                no_separator
                xs={12}
                md={12}
                content={
                  <Link to="/skills">
                    <Tooltip
                      title="Made From 100% Recycled Pixels"
                      arrow={true}
                      size="big"
                    >
                      <span className="technologyButton centerJustifyNoMargin">
                        <AwesomeButton
                          style={{ width: "100%" }}
                          type="primary"
                          bubbles={true}
                        >
                          Continue to Skills
                        </AwesomeButton>
                      </span>
                    </Tooltip>
                  </Link>
                }
              />
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
export default BioView;
