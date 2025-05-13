import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';
import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  const auth = useAuth();

  const linkStyles = {
    textDecoration: 'none',
    fontWeight: 'normal', // Default styles for links
  };

  const activeLinkStyles = {
    textDecoration: 'none',
    fontWeight: 'bold', // Styles for active links
  };

  return (
    <div>
      <nav className='primary-nav'>
        <Logo />
        <NavLink to="/" style={linkStyles} activeStyle={activeLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyles} activeStyle={activeLinkStyles}>
          Contact Us
        </NavLink>
        <NavLink to="/findroutes" style={linkStyles} activeStyle={activeLinkStyles}>
          Bus Tickets
        </NavLink>
        <NavLink to="/profile" style={linkStyles} activeStyle={activeLinkStyles}>
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink to="/login" style={linkStyles} activeStyle={activeLinkStyles}>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
}