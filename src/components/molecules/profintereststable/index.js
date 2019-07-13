//@format
import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ExpandableTable from '../../../components/atoms/expandabletable/';
import ClickModal from '../../../components/atoms/clickmodal';

import Climbing from '../../../assets/img/icons/climbing.png';
import Coaching from '../../../assets/img/icons/coaching.png';
import Medical from '../../../assets/img/icons/medical.png';
import Rafting from '../../../assets/img/icons/rafting.png';
import Teaching from '../../../assets/img/icons/teaching.png';

import fugitive from '../../../assets/img/gallery/website1.jpg';
import haystack from '../../../assets/img/gallery/website4.jpg';
import newyosemite from '../../../assets/img/gallery/website13.jpg';
import nrgorge from '../../../assets/img/gallery/website14.jpg';

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
const styles = {
  images: {
    left: {float: 'left', width: '49%', marginTop: '1%', marginBottom: '1%'},
    right: {float: 'right', width: '49%', marginTop: '1%', marginBottom: '1%'}
  }
};
const profInterestsData = [
  {
    title: 'Climbing',
    logo: Climbing,
    subcomponent: (
      <>
        <div style={{...styles.images.left}}>
          <ClickModal>
            <Image responsive rounded src={fugitive} />
          </ClickModal>
        </div>
        <div style={{...styles.images.right}}>
          <ClickModal>
            <Image responsive rounded src={haystack} />
          </ClickModal>
        </div>
        <div style={{...styles.images.left}}>
          <ClickModal>
            <Image responsive rounded src={nrgorge} />
          </ClickModal>
        </div>
        <div style={{...styles.images.right}}>
          <ClickModal>
            <Image responsive rounded src={newyosemite} />
          </ClickModal>
        </div>
      </>
    )
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
        expanded={this.props.expanded}
        handleExpand={this.props.handleExpand}
        columns={profInterestsColumns}
        showPagination={false}
        data={profInterestsData}
        className={'profInterests'}
      />
    );
  }
}
