import React, { Component } from 'react';
import './styles/Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <ul className='footer-ul'>
              <a href="https://linkedin.com/in/lukewickens"> LinkedIn </a>|
              <a href="mailto:lukewickens1989@gmail.com"> Gmail </a>|
              <a href="https://lukewickens1989.medium.com/"> Medium </a>|
              <a href="https://www.twitter.com/luke_wickens"> Twitter </a>|
          </ul>
        </div>
    );
  }
}

export default Footer;