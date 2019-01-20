//@format
import React, {Component} from 'react';
import {Col, Button} from 'react-bootstrap';
import ExpandableList from '../../../components/atoms/expandablelist/';

class SoopList extends Component {
  render() {
    let soop;
    if (this.props.listData.allSoop) {
      soop = this.props.listData.allSoop
        .filter(row => {
          return row.day === this.props.day;
        })
        .map(row => {
          row.name = (
            <div className="soopHeader">
              <Col xs={12} className="soopHeaderTitle">
                {row.title}
              </Col>
              <Col xs={12} sm={5}>
                Keywords: <span className="soopHeader">{row.food}</span>
              </Col>
              <Col xs={12} sm={5}>
                Event Score: <span className="soopHeader">{row.score}</span>
              </Col>
            </div>
          );
          row.expandedText = (
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
                  <Button bsStyle="success" onClick={this.props.onLike}>
                    Like
                  </Button>
                </Col>
                <Col xs={3} sm={2} className="soopButtonCol">
                  <Button bsStyle="danger" onClick={this.props.onDislike}>
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
          name: 'loading...'
        }
      ];
    }

    return (
      <ExpandableList
        className="soopList"
        active={this.props.active}
        onSelect={this.props.onSelect}
        listData={soop}
        logoSize={0}
      />
    );
  }
}

export default SoopList;
