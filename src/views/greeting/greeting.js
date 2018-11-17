//@format
import React, {Component} from 'react';
import '../../assets/css/App.css';

import Greeting from '../../components/organisms/d3/greeting';

const styles = {
  fontFamily: 'sans-serif',
    marginLeft: '50px',
    marginRight: '50px'
};

class GreetingView extends Component {
  render() {
    return (
      <div style={styles}>
        <Greeting />
        <hr/>
        <h1>John Pribyl</h1>
      </div>
    );
  }
}
export default GreetingView;
