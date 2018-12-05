import React, {Component} from 'react';
import ExpandableList from '../../../components/atoms/expandablelist/';
import Climbing from '../../../assets/img/icons/climbing.png';
import Coaching from '../../../assets/img/icons/coaching.png';
import Medical from '../../../assets/img/icons/medical.png';
import Rafting from '../../../assets/img/icons/rafting.png';
import Teaching from '../../../assets/img/icons/teaching.png';

const profInterests = [
  {
    name: 'Climbing',
    id: 'climbing',
      logo: Climbing,
    expandedText: (
      <div>
      </div>
    )
  },
  {
    name: 'Emergency Medicine',
    id: 'medical',
    logo: Medical,
    expandedText: (
      <div>
      </div>
    )
  },
  {
    name: 'Teaching',
    id: 'teaching',
      logo: Teaching,
    expandedText: (
      <div>
      </div>
    )
  },
  {
    name: 'Rafting',
    id: 'rafting',
      logo: Rafting
  },
  {
    name: 'Coaching',
    id: 'coaching',
      logo: Coaching
  }
];

class ProfInterests extends Component {
  render() {
    return <ExpandableList listData={profInterests} className={'profInterests'}/>;
  }
}

export default ProfInterests;
