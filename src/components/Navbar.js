import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0">
          <text className='name-nav'>Luke Wickens</text>
          <ul className='navbar-nav px-3'>
            <li>
              <a href="https://linkedin.com/in/lukewickens">
                <img align="center" alt="lukewickens1989 | LinkedIn" width="30px" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Linkedin.svg" />
              </a>
            </li>
            <li>
              <a href="mailto:lukewickens1989@gmail.com">
                <img align="center" alt="lukewickens1989 | Email" width="30px" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Gmail.svg" />
              </a>
            </li>
            <li>
              <a href="https://lukewickens1989.medium.com/">
                <img align="center" alt="lukewickens1989 | Medium" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/medium.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.codewars.com/users/lukewickens1989">
                <img align="center" alt="lukewickens1989 | Codewars" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.12.3/icons/codewars.svg" />
              </a>
            </li>
            <li>
              <a href="https://https://www.instagram.com/mustytomes/">
                <img align="center" alt="lukewickens1989 | Instagram" width="30px" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Instagram.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/luke_wickens">
                <img align="center" alt="lukewickens1989 | Twitter" width="30px" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Twitter.svg" />
              </a>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
