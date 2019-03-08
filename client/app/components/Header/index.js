import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import BitsBeat from './bitsbeat.png';
import messages from './messages';
import { Menu, Button } from 'semantic-ui-react'

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          
          <Menu>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/example">
            <FormattedMessage {...messages.example} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
          </Menu>
        </NavBar>
        
        {/* <A href="https://bitsbeat.com">
          <Img src={BitsBeat} alt="bitsbeat-boilerplate - Logo" />
        </A> */}
      </div>
    );
  }
}

export default Header;
