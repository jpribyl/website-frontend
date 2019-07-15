import React, {Component} from 'react';
import ReactScrollableAnchor from 'react-scrollable-anchor';

class ScrollableAnchor extends React.Component {
  render() {
    return (
      <ReactScrollableAnchor {...this.props}>
          <div>
                  {this.props.children}
          </div>
      </ReactScrollableAnchor>
    );
  }
}

export default ScrollableAnchor
