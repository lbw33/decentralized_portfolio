import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0">
          <text className='name-nav'>Luke Wickens</text>
        </nav>
    );
  }
}

export default Navbar;
