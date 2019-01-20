import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import {Link} from 'react-router-dom';
import indexRoutes from '../../../routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={'250px'} >
        <div id="sidebarSignature">
          <h1 className="name">john pribyl</h1>
          <h2 className="title">data scientist</h2>
        </div>
        {indexRoutes.map((route, index) => {
          return (
            <Link to={route.path} key={'sidebar_' + index}>
              <i className="faicon">
                <FontAwesomeIcon icon={route.faicon}/>
              </i>
              {route.name}
            </Link>
          );
        })}
      </Menu>
    );
  }
}

export default Sidebar;
