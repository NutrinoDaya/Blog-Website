import React from 'react';
import '../Style/Footer.scss';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">Bau Journal</div>
      <div className="footer__column">
        <Link className='Footer_Links' to="/">Home</Link>
        <Link className='Footer_Links' to="/Papers">Papers</Link>
        <Link className='Footer_Links' to="/Write">Write</Link>
        <Link className='Footer_Links' to="/Contact">Contact</Link>
        <Link className='Footer_Links' to="/Login">Login</Link>
        <Link className='Footer_Links' to="/About">About</Link>
      </div>
      <div className="footer__date">@2023</div>
      <a href="mailto:m.daya.nutrino@gmail.com" className="footer__email">m.daya.nutrino@gmail.com</a>
    </footer>
  );
}

export default Footer;
