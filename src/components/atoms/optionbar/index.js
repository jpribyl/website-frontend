//@format
import React from 'react';
import {
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Navbar,
  MenuItem,
  NavItem,
  Nav
} from 'react-bootstrap';

class OptionBar extends React.Component {
  _handleSelect = key => {
    this.props.handleSelect(key);
  };

  render() {
    const bar = this.props.data.map((row, index) => {
      return (
        <NavItem key={'optionBar_' + index} eventKey={row.value}>
          {row.text}
        </NavItem>
      );
    });

    return (
      <Navbar>
        <Nav
          bsStyle="pills"
          activeKey={this.props.activeKey}
          onSelect={this._handleSelect}>
          {bar}
        </Nav>
      </Navbar>
    );
  }
}

export default OptionBar;
