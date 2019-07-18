//@format
import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Card extends Component {
  shouldComponentUpdate() {
    return this.props.shouldComponentUpdate || true;
  }
  render() {
    let separator;
    if (!this.props.no_separator) {
      separator = <hr />;
    } else {
      separator = <span />;
    }

    const ConditionalWrap = ({condition, wrap, children}) =>
      condition ? wrap(children) : children;

    return (
      <div>
        <div id="dimOverlay" />
        <ConditionalWrap
          condition={this.props.to != null}
          wrap={children => <Link to={this.props.to}>{children}</Link>}>
          <Col
            id={this.props.id}
            xl={this.props.xl}
            lg={this.props.lg}
            md={this.props.md}
            sm={this.props.sm}
            xs={this.props.xs}>
            <div
              className={
                'card' +
                (this.props.plain ? ' card-plain' : '') +
                ' ' +
                this.props.className
              }>
              <div
                className={
                  'header' + (this.props.hCenter ? ' text-center' : '')
                }>
                <h2 className="title">{this.props.title}</h2>
                {separator}
                <p className="category">{this.props.category}</p>
              </div>
              <div
                className={
                  'content' +
                  (this.props.ctAllIcons ? ' all-icons' : '') +
                  (this.props.ctTableFullWidth ? ' table-full-width' : '') +
                  (this.props.ctTableResponsive ? ' table-responsive' : '') +
                  (this.props.ctTableUpgrade ? ' table-upgrade' : '')
                }>
                {this.props.content}

                <div className="footer">
                  {this.props.legend}
                  {this.props.stats != null ? <hr /> : ''}
                  <div className="stats">
                    <i className={this.props.statsIcon} /> {this.props.stats}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </ConditionalWrap>
      </div>
    );
  }
}

export default Card;
