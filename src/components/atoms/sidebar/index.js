import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import MetisMenu from 'react-metismenu';
import {Link} from 'react-router-dom';
import indexRoutes from '../../../routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const signature = (
      <div id="sidebarSignature">
        <h1 className="name">john pribyl</h1>
        <h2 className="title">data scientist</h2>
        <hr className="metisHr" />
      </div>
    );

    let metisMenuItems = [
      {
        label: signature,
        id: 1
      }
    ];
    metisMenuItems = [];
    indexRoutes.map((route, index) => {
      const icon = <FontAwesomeIcon icon={route.faicon} />;
      const label = (
        <div>
          <i className="faicon">
            <FontAwesomeIcon icon={route.faicon} />
          </i>
          <span className="metisRoute">{route.name}</span>
        </div>
      );
      const metisItem = {
        icon: icon,
        label: label,
        to: '/#' + route.path
      };
      metisMenuItems.push(metisItem);
      return route;
    });
    return (
      <>
        <div id="metisMenu">
          <div id="metisSignature">{signature}</div>
          <MetisMenu content={metisMenuItems} activeLinkFromLocation />
        </div>
        <div id="slideMenu">
          <Menu width={'250px'}>
            {signature}
            {indexRoutes.map((route, index) => {
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
