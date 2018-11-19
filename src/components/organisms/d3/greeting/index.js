//@format
import React, {Component} from 'react';

import Canvas from '../../../../components/molecules/d3/canvas/index';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

//props:
//num items
//width
//height
//max radius
//min radius
//color list

class Greeting extends Component {
  constructor(props) {
    super();
    let width = window.innerWidth * 0.89;
    let height;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.75;
    } else {
      height = window.innerHeight * 0.6;
    }
    this.state = {
      animate: props.animate,
      numPoints: 100,
      duration: 25000,
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

  componentWillReceiveProps(props) {
    try {
      if (props.animate !== this.state.animate) {
        this.setState({animate: props.animate});
      }
    } catch (e) {
      /* handle error */
    }
  }

  render() {
    return (
      <svg
        className="greeter d3svg"
        style={{
          width:
            this.state.width + this.state.margin.right + this.state.margin.left,
          height:
            this.state.height + this.state.margin.top + this.state.margin.bottom
        }}>
        <Canvas
          numPoints={this.state.numPoints}
          width={this.state.width}
          height={this.state.height}
          maxRadius={this.state.maxRadius}
          margin={this.state.margin}
          duration={this.state.duration}
          animate={this.state.animate}
        />
      </svg>
    );
  }
}
export default Greeting;
