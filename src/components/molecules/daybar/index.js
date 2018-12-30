//@format
import React, {Component} from 'react';
import OptionBar from '../../../components/atoms/optionbar/';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let daybar = [];
for (var i = 0, len = 7; i < len; i++) {
  var date = new Date();
  date.setDate(date.getDate() + i);

  var day = weekdays[date.getDay()];

  daybar.push({
    date: date,
    value: date.toLocaleDateString(),
    text: day
  });
}

class DayBar extends Component {
  render() {
    return (
      <OptionBar
        data={daybar}
        activeKey={this.props.activeKey}
        handleSelect={this.props.handleSelect}
      />
    );
  }
}

export default DayBar;
