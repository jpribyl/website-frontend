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
    const Menu1 = () => (
      <div>
        <u>Menu 1 View</u>
      </div>
    );
    const Menu2 = () => (
      <div>
        <i>Menu 2 View</i>
      </div>
    );
    const SubMenu = () => (
      <div>
        <s>SubMenu View</s>
      </div>
    );

    let metisMenuItems = indexRoutes.map((route, index) => {
      const metisItem = {
        icon: route.faicon,
        label: route.name,
        to: '/#' + route.path
      };
      return metisItem;
    });
    return (
      <>
        <div id="metisMenu">
          <MetisMenu content={metisMenuItems} activeLinkFromLocation />
        </div>
        <div id="slideMenu">
          <Menu width={'250px'}>
            <div id="sidebarSignature">
              <h1 className="name">john pribyl</h1>
              <h2 className="title">data scientist</h2>
            </div>
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
