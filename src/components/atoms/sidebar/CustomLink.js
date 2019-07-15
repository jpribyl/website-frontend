/**
 * src/components/DefaultLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {HashLink} from 'react-router-hash-link';

const DefaultLink = ({
  className,
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
}) => (
  <HashLink
    className={classnames(
      className,
      active && classNameActive,
      hasActiveChild && classNameHasActiveChild
    )}
    onClick={hasSubMenu ? toggleSubMenu : activateMe}
    style={{color: 'white'}}
    to={to}>
    <a
      className={classnames(
        className,
        active && classNameActive,
        hasActiveChild && classNameHasActiveChild
      )}
      href={to}
      onClick={hasSubMenu ? toggleSubMenu : activateMe}
      target={externalLink ? '_blank' : undefined}>
      {children}
    </a>
  </HashLink>
);

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

export default DefaultLink;
