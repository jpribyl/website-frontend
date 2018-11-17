//@format
import React, {Component} from 'react';
import '../../../../assets/css/App.css';

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
    this.state = {
      animating: true,
      numPoints: 80,
      width: window.innerWidth * 0.85,
      height: window.innerHeight * 0.8,
      maxRadius: 20,
      margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      }
    };
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
        />
      </svg>
    );
  }
}
export default Greeting;
