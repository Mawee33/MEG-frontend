import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <ul className="all-list">
        <div className="nav-menu">
          <li>
            <NavLink to="/menu">
              <FontAwesomeIcon icon={faBars} />
              <p>&nbsp;</p>
              Menu
            </NavLink>
          </li>
        </div>
        <div className="logo">
          <li>
            <NavLink exact to="/">
              <img
                src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575623422/MEG/Text_logo_xtajgv.jpg"
                alt="MEG"
              />
            </NavLink>
          </li>
        </div>
        <div className="nav-end">
          <li>
            <NavLink to="/search-bar">
              <FontAwesomeIcon icon={faSearch} />
              <p>&nbsp;</p>
              <input className="search" type="text" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <FontAwesomeIcon icon={faUser} />
              <p>&nbsp;</p>
              Connectez-vous
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <p>&nbsp;</p>
              Panier
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavMain;
