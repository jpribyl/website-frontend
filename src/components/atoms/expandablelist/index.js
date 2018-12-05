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
    return this.props.listData.map(row => {
      const active = this.state.active === row.id;
      return (
        <div className={this.props.className}>
          <ListGroupItem
            active={active}
            id={row.id}
            onClick={this._handleClick}>
            <Col xs={2}>
              <Image src={row.logo} rounded responsive />
            </Col>
            <Col xs={8}>{row.name}</Col>
            <Col xs={2}>
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
