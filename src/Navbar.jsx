import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" activeClassName="active">
            Foods
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
