//@format
import React, {Component} from 'react';

export class Dimmer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let _dim, _undim;
    _dim = i => {
      let overlay = document.getElementById('dimOverlay').classList;
      overlay.add('active');
    };

    _undim = i => {
      let overlay = document.getElementById('dimOverlay').classList;
      overlay.remove('active');
    };

    return (
      <>
        <div id="dimOverlay" />
        <div
          style={{position: 'relative'}}
          className="hoveringOnTopOfDimmer"
          onMouseEnter={_dim}
          onMouseLeave={_undim}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Dimmer;
