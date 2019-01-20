//@format
import React, {Component} from 'react';
import {Col, Button} from 'react-bootstrap';
import ExpandableTable from '../../../components/atoms/expandabletable/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const soopColumns = [
  {
    //Header: 'Title'
    accessor: 'header',
    sortable: false
  },
  {
    Cell: u => {
      return <FontAwesomeIcon className="dropdownIcon" icon="caret-down" />;
    },
    sortable: false,
    width: 40
  }
];

export default class SoopListTable extends Component {
  render() {
    let soop;
    if (this.props.listData.allSoop) {
      soop = this.props.listData.allSoop
        .filter(row => {
          return row.day === this.props.day;
        })
        .map(row => {
          row.header = (
            <div className="soopHeader">
              <Col xs={12} className="soopHeaderTitle">
                {row.title}
              </Col>
              <Col xs={12} sm={5}>
                Keywords: <span className="soopHeader">{row.food}</span>
              </Col>
              <Col xs={12} sm={5}>
                Event Score:{' '}
                <span className="soopHeader">
                  {Math.round(row.score * 100) / 100}
                </span>
              </Col>
            </div>
          );
          row.subcomponent = (
            <div>
              <h4>Summary:</h4>
              {row.details}
              <hr />
              <div>
                <Col xs={12} sm={9} className="soopButtonCol">
                  <Button bsStyle="warning" href={row.outUrl}>
                    Event Link (external)
                  </Button>
                </Col>
                <Col xs={3} sm={1} className="soopButtonCol">
                  <Button
                    bsStyle="success"
                    onClick={() => this.props.onLike(row)}>
                    Like
                  </Button>
                </Col>
                <Col xs={3} sm={2} className="soopButtonCol">
                  <Button
                    bsStyle="danger"
                    onClick={() => this.props.onDislike(row)}>
                    Dislike
                  </Button>
                </Col>
              </div>
            </div>
          );
          row.id = row.id.toString();
          return row;
        });
    } else {
      soop = [
        {
          header: 'loading...'
        }
      ];
    }

    return (
      <ExpandableTable
        showPagination={false}
        className="soopListTable"
        columns={soopColumns}
        data={soop}
      />
    );
  }
}
