import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import MetisMenu from 'react-metismenu';
import {Link} from 'react-router-dom';
import indexRoutes from '../../../routes';
import {AwesomeButton} from 'react-awesome-button';
import {Tooltip} from 'react-tippy';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {name, title} from '../../../objects/signature';
import CustomLink from './CustomLink';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLinkTo: '/#'};
  }
  showSettings(event) {
    event.preventDefault();
  }
  componentDidMount() {
    console.log('mount');
    this.setState({
      activeLinkTo: window.location.hash.replace(/^#/, '')
    });
  }
  componentWillReceiveProps() {
    console.log('props');
    this.setState({
      activeLinkTo: window.location.hash.replace(/^#/, '')
    });
  }

  render() {
    console.log('render sidebar');

    // we have to use predefined react-awesome-button types to avoid writing
    // lots of code.. facebook and youtube are meaningless it is really blue
    // and yellow
    const getInTouchType =
      window.location.hash === '#/bio' ? 'facebook' : 'youtube';

    const signature = (
      <div id="sidebarSignature">
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
        <hr className="metisHr" />
      </div>
    );

    const metisMenuItems = indexRoutes
      .filter(route => {
        return route.sidebar;
      })
      .map((route, index) => {
        const icon = <FontAwesomeIcon icon={route.faicon} />;

        let label, content;
        if (route.content) {
          content = route.content.map(contentRoute => {
            return {
              label: contentRoute.label,
              to: contentRoute.to
            };
          });

          label = (
            <div>
              <i className="faicon">
                <FontAwesomeIcon icon={route.faicon} />
              </i>
              <span className="metisRoute">{route.name}</span>
            </div>
          );
        } else {
          label = (
            <div>
              <i className="faicon">
                <FontAwesomeIcon icon={route.faicon} />
              </i>
              <span className="metisRoute">{route.name}</span>
            </div>
          );
        }

        return {
          icon: icon,
          firstChild: route.firstChild,
          label: label,
          to: route.path,
          content: content
        };
      });

    return (
      <>
        <div id="metisMenu">
          <div id="metisSignature">{signature}</div>
          <MetisMenu
            ref="metisMenu"
            content={metisMenuItems}
            LinkComponent={CustomLink}
            activeLinkTo={this.state.activeLinkTo}
          />
          <div id="metisContact">
            <a href="mailto:pribylsnbits@gmail.com">
                <span className="technologyButton centerJustifyNoMargin">
                  <AwesomeButton
                    style={{width: '100%'}}
                    type={getInTouchType}
                    bubbles={true}>
                    Get in touch
                  </AwesomeButton>
                </span>
            </a>
          </div>
        </div>

        <div id="slideMenu">
          <Menu width={'250px'}>
            {signature}
            <a href="mailto:pribylsnbits@gmail.com">
                <span className="technologyButton centerJustifyNoMargin">
                  <AwesomeButton
                    style={{width: '100%'}}
                    type="primary"
                    bubbles={true}>
                    Get in touch
                  </AwesomeButton>
                </span>
            </a>
            {indexRoutes
              .filter(route => {
                return route.sidebar;
              })
              .map((route, index) => {
                return (
                  <Link to={route.path} key={'sidebar_' + index}>
                    <i className="faicon">
                      <FontAwesomeIcon icon={route.faicon} />
                    </i>
                    {route.name}
                  </Link>
                );
              })}
          </Menu>
        </div>
      </>
    );
  }
}

export default Sidebar;
