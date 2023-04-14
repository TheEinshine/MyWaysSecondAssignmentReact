import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../src/assets/css/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to="/" exact className="navbar__link" activeClassName="navbar__link--active">
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/food" className="navbar__link" activeClassName="navbar__link--active">
            Foods
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
