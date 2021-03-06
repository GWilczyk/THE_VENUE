import React, { Component } from 'react';
import SideDrawer from './SideDrawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
  state = {
    isDrawerOpen: false,
    doesHeaderShow: false
  };

  toggleDrawer = value => {
    this.setState({ isDrawerOpen: value });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () =>
    window.scrollY > 0
      ? this.setState({ doesHeaderShow: true })
      : this.setState({ doesHeaderShow: false });

  render() {
    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: this.state.doesHeaderShow
            ? '#2f2f2f'
            : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>The Venue</div>
            <div className='header_logo_title'>Musical Events</div>
          </div>

          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.isDrawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
