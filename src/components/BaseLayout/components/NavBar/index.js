// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-materialize';

// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">Women</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">Men</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/accessories">Accessories</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/Clothes">Clothes</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/Login" >Login</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
      </nav>
);

export default Navbar;
