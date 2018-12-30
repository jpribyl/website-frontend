//@format
import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Card extends Component {
  render() {
    let separator;
    if (!this.props.no_separator) {
      separator = <hr />;
    } else {
      separator = <span />;
    }

    let _dim, _undim;
    if (this.props.dim) {
      _dim = i => {
        let target = i.currentTarget.id;
        let overlay = document.getElementById('dimOverlay').classList;
        overlay.add(target);
        overlay.add('active');

        document.getElementById(target).classList.add('hoveringOnTopOfDimmer');
      };

      _undim = i => {
        let target = i.currentTarget.id;
        let overlay = document.getElementById('dimOverlay').classList;
        overlay.remove('active');
        overlay.remove(target);
        console.log(target);
        setTimeout(() => {
          if (!overlay.contains('active') || !overlay.contains(target)) {
            setTimeout(() => {
              if (!overlay.contains('active') || !overlay.contains(target)) {
                try {
                  document
                    .getElementById(target)
                    .classList.remove('hoveringOnTopOfDimmer');
                } catch (e) {
                  //cursor already navigated away
                }
              }
            }, 970);
          }
        }, 30);
      };
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
            onMouseOver={_dim}
            onMouseOut={_undim}
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
