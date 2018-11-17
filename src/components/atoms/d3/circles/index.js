//@format
import React, {Component} from 'react';
import * as d3 from 'd3';

class Circle extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      x: props.x,
      y: props.y,
      r: props.r,
      className: props.className
    };
  }

  circleRef = React.createRef();

  componentDidUpdate() {
    let d = d3.select(this.circleRef.current);

    d.transition()
      .duration(1000)
      .attr('cx', this.props.x)
      .attr('cy', this.props.y)
      .attr('r', this.props.r)
      .on('end', () =>
        this.setState({
          x: this.props.x,
          y: this.props.y,
          r: this.props.r
        })
      );
  }

  render() {
    const x = this.state.x;
    const y = this.state.y;
    const r = this.state.r;
    const className = this.state.className;
    return (
      <circle className={className} r={r} cx={x} cy={y} ref={this.circleRef} />
    );
  }
}

export default Circle;
