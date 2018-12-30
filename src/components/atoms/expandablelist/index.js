import React, {Component} from 'react';
import {Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class ExpandableList extends Component {
  constructor(props) {
    super();
    this.state = {
      active: props.active
    };
  }

  _handleClick = e => {
    if (this.state.active === e.target.id) {
      this.setState({active: null});
    } else {
      this.setState({active: e.target.id});
    }
  };

  render() {
      let logoSize, nameSize, dropdownSize;
      if (this.props.logoSize != null) {
          logoSize = this.props.logoSize
          dropdownSize = 2
          nameSize = 12 - logoSize - dropdownSize
      } else {
          logoSize = 2
          dropdownSize = 2
          nameSize = 8
      }

    return this.props.listData.map((row, index) => {
      const active = this.state.active === row.id;
      return (
        <div className={this.props.className} key={'expandablelist_' + index}>
          <ListGroupItem
            active={active}
            id={row.id}
            onClick={this._handleClick}>
            <Col xs={logoSize}>
              <Image src={row.logo} rounded responsive />
            </Col>
            <Col xs={nameSize}>{row.name}</Col>
            <Col xs={dropdownSize}>
              <FontAwesomeIcon className="dropdownIcon" icon="caret-down" />
            </Col>
          </ListGroupItem>
          {active ? (
            <div className="expandedListText">{row.expandedText}</div>
          ) : (
            <span />
          )}
        </div>
      );
    });
  }
}

export default ExpandableList;
