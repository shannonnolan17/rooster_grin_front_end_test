import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <img className="logo center-block" src={require('../images/igniter-logo-white.png')} />
      </div>
    );
  }
}

export default NavBar;