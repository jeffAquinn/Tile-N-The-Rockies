/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './img/tnrLogo.JPG';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              className={s.tnrLogo}
              src={logoUrl}
              height="25"
              width="25"
              boarderRadius="50"
              alt="Tile N The Rockies Logo"
            />

            <span className={s.brandTxt}>Tile N The Rockies</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Custom Built</h1>
            <p className={s.bannerDesc}>
              Master Bathrooms, Steam Showers, Entry Floors, Heated Floors...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
