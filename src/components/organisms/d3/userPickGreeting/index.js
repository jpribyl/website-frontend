//@format
import React, {Component} from 'react';
import Switch from 'react-toggle-switch';
import {AwesomeButton} from 'react-awesome-button';
import {Grid, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderTooltip = createSliderWithTooltip(Slider);

class UserGeneratedGreeting extends Component {
  constructor(props) {
    super();
    this.state = {
      animate: true,
      numPoints: 50,
      animationSpeed: 50,
      animationDuration: props.duration
    };
  }

  _togglAnimate = () => {
    this.setState({animate: !this.state.animate});
  };

  _seedData = props => {
    const numPoints = this.state.numPoints;
    const width = props.width;
    const height = props.height;
    const maxRadius = props.maxRadius;

    let data = [];
    for (var i = 0, len = numPoints; i < len; i++) {
      var x = Math.random() * width;
      var y = Math.random() * height;
      var r = Math.random() * maxRadius;
      data.push({
        x: x,
        y: y,
        r: r,
        className: 'star clickable canvas'
      });
    }
    return data;
  };

  _generateGraphic = () => {
    this.setState({waitForApply: false});
    var data = this._seedData(this.props);
    d3.selectAll('.clickable.canvas').remove();

    var circles = d3
      .select('.d3svg.greeter')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('g')
      .attr('class', d => {
        return d.className;
      })
      .style(
        'transform',
        'translate(' +
          this.props.margin.left +
          'px,' +
          this.props.margin.top +
          'px)'
      )
      .append('circle')
      .attr('cx', d => {
        return d.x;
      })
      .attr('cy', d => {
        return d.y;
      })
      .attr('r', d => {
        return d.r;
      })
      .attr('class', d => {
        return d.className;
      })
      .on('click', function(d, i) {
        d3.select(this)
          .transition()
          .duration(500)
          .style('stroke-opacity', '0')
          .style('fill-opacity', '0')
          .remove();
      });

    this._animateGraphic(circles);
    d3.interval(() => {
      this._animateGraphic(circles);
    }, this.state.animationDuration * 0.9);
  };

  _animateGraphic = points => {
    var transitionData = this._seedData(this.props);

    points
      .data(transitionData)
      .transition()
      .duration(this.state.animationDuration)
      .attr('cx', d => {
        return d.x;
      })
      .attr('cy', d => {
        return d.y;
      })
      .attr('r', d => {
        return d.r;
      });
  };

  _setNumPoints = e => {
    this.setState({numPoints: e, waitForApply: true, disableButton: false});
  };

  _setAnimationSpeed = e => {
    this.setState({
      animationSpeed: e,
      animationDuration: this.props.duration * 0.5 * (100 / e),
      waitForApply: true,
      disableButton: false
    });
  };

  componentDidUpdate() {
    let d = d3.selectAll('.clickable.canvas');
    if (this.state.waitForApply || !this.props.animate) {
      d.interrupt();
    }
  }

  render() {
    return (
      <Col id="generateGraphicOuter">
        <Col lg={2} xs={8}>
          <div id="generateGraphicSlider">
            <div className="slider">
              Number of points:
              <SliderTooltip
                className="slider numPointsSlider"
                max={100}
                onBeforeChange={() => {
                  this.setState({disableButton: true});
                }}
                onAfterChange={this._setNumPoints}
                defaultValue={this.state.numPoints}
              />
            </div>
            <div className="slider">
              Animation Speed:
              <SliderTooltip
                className="slider animationSpeedSlider"
                onBeforeChange={() => {
                  this.setState({disableButton: true});
                }}
                onAfterChange={this._setAnimationSpeed}
                defaultValue={this.state.animationSpeed}
              />
            </div>
          </div>
        </Col>
        <Col lg={2} xs={8}>
          <div id="generateGraphicButton">
            <AwesomeButton
              id="generateGraphicButton"
              disabled={this.state.disableButton}
              type="primary"
              bubbles={true}
              action={this._generateGraphic}>
              APPLY
            </AwesomeButton>
          </div>
        </Col>
      </Col>
    );
  }
}
export default UserGeneratedGreeting;
