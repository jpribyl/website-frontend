import React, { Component } from "react";
import { Col } from 'react-bootstrap';

export class Card extends Component {
  render() {
    return (

        <Col xl={this.props.xl} lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
      <div className={"card" + (this.props.plain ? " card-plain" : "") + ' ' + this.props.className}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h2 className="title">{this.props.title}</h2>
          <hr/>
          <p className="category">{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
        </div>
      </div>
</Col>
    );
  }
}

export default Card;
