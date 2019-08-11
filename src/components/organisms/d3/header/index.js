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

class Header extends Component {
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
      numPoints: props.numPoints,
      duration: props.duration,
      width: props.width,
      height: props.height,
      maxRadius: props.maxRadius,
      margin: props.margin
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    let height, width, numPoints;
    if (window.innerWidth > 800) {
      height = window.innerHeight * 0.2;
      width = (window.innerWidth - 200) * 0.88;
    } else {
      height = window.innerHeight * 0.1;
      width = window.innerWidth * 0.7;
    }
    this.setState({width: width, height: height});
  };

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
      <div className="d3svg">
        <svg
          className="bio d3svg"
          style={{
            width:
              this.state.width +
              this.state.margin.right +
              this.state.margin.left,
            height:
              this.state.height +
              this.state.margin.top +
              this.state.margin.bottom
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
          <text x={20} y={60} className="bio headerTextBox">
            {this.props.text}
          </text>
          <text x={20} y={60} className="bio headerText">
            {this.props.text}
          </text>
        </svg>
      </div>
    );
  }
}
export default Header;
