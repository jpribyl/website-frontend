//@format
import React, {Component} from 'react';
import '../../../../assets/css/App.css';

import Circle from '../../../../components/atoms/d3/circles/index';

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

class Canvas extends Component {
  constructor(props) {
    super();
    this.state = {
      animating: true,
      data: this._seedData(props)
    };
  }

  _seedData = props => {
    const numPoints = props.numPoints;
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
        className: 'pumpkin'
      });
    }
    return data;
  };

  _animate = () => {
    console.log('animating...');
    this.setState({
      data: this._seedData(this.props)
    });
  };

  render() {
    return (
      <g
        className='clickable'
        onClick={this._animate}
        style={{
          transform:
            'translate(' +
            this.props.margin.left +
            'px,' +
            this.props.margin.top +
            'px)'
        }}>
        >
        {this.state.data.map(point => {
          return (
            <Circle
              className={point.className}
              x={point.x}
              y={point.y}
              r={point.r}
            />
          );
        })}
      </g>
    );
  }
}
export default Canvas;
