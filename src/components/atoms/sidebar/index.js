import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import MetisMenu from 'react-metismenu';
import {Link} from 'react-router-dom';
import indexRoutes from '../../../routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {name, title} from '../../../objects/signature';

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
    this.setState({activeLinkTo: '/' + window.location.hash});
  }
  componentWillReceiveProps() {
    console.log('props');
    this.setState({activeLinkTo: '/' + window.location.hash});
  }

  render() {
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
              to: process.env.PUBLIC_URL + contentRoute.to
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
          label: label,
          to: process.env.PUBLIC_URL + '/#' + route.path,
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
            activeLinkTo={this.state.activeLinkTo}
          />
        </div>

        <div id="slideMenu">
          <Menu width={'250px'}>
            {signature}
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
