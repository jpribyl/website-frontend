//@format
import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ExpandableTable from '../../../components/atoms/expandabletable/';
import ClickModal from '../../../components/atoms/clickmodal';

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
