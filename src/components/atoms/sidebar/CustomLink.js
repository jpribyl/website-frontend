/**
 * src/components/DefaultLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {HashLink} from 'react-router-hash-link';
import {withRouter} from 'react-router-dom';

const DefaultLink = ({
  history,
  className,
  firstChild,
  classNameActive,
  classNameHasActiveChild,
  active,
  hasActiveChild,
  to,
  externalLink,
  hasSubMenu,
  toggleSubMenu,
  activateMe,
  children
}) => {

  if (firstChild == null) {
    firstChild = '';
  }

  if (window.location.hash != '#' + to + firstChild) {
    to = to + firstChild;
  }

  let onClick;
  if (hasSubMenu) {
    onClick = async e => {
      const event = e.persist();
      toggleSubMenu(event);
    };
  } else {
    onClick = e => {
      activateMe(e);
    };
  }

  return (
    <HashLink
      className={classnames(
        className,
        active && classNameActive,
        hasActiveChild && classNameHasActiveChild
      )}
      onClick={onClick}
      style={{color: 'white'}}
      to={to}>
      {children}
    </HashLink>
  );
};

DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null
};

DefaultLink.propTypes = {
  className: PropTypes.string.isRequired,
  classNameActive: PropTypes.string.isRequired,
  classNameHasActiveChild: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default withRouter(DefaultLink);
