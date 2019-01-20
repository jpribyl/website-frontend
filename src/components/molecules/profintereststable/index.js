//@format
import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ExpandableTable from '../../../components/atoms/expandabletable/';
import Climbing from '../../../assets/img/icons/climbing.png';
import Coaching from '../../../assets/img/icons/coaching.png';
import Medical from '../../../assets/img/icons/medical.png';
import Rafting from '../../../assets/img/icons/rafting.png';
import Teaching from '../../../assets/img/icons/teaching.png';

const profInterestsColumns = [
  {
    //Header: 'Logo',
    sortable: false,
    width: 75,
    Cell: u => {
      return <Image src={u.original.logo} rounded responsive />;
    },
    logo: Climbing
  },
  {
    //Header: 'Title',
    accessor: 'title',
    sortable: false
  },
  {
    //Header: 'Title',
    Cell: u => {
      return <FontAwesomeIcon className="dropdownIcon" icon="caret-down" />;
    },
    sortable: false,
    width: 40
  }
];

const profInterestsData = [
  {
    title: 'Climbing',
    logo: Climbing,
    subcomponent: <div>climbing...</div>
  },
  {
    title: 'Rafting',
    logo: Rafting
  },
  {
    title: 'Coaching',
    logo: Coaching
  },
  {
    title: 'Teaching',
    logo: Teaching
  },
  {
    title: 'Medical',
    logo: Medical
  }
];

export default class ProfInterestsTable extends Component {
  render() {
    return (
      <ExpandableTable
        columns={profInterestsColumns}
        showPagination={false}
        data={profInterestsData}
        className={'profInterests'}
      />
    );
  }
}
