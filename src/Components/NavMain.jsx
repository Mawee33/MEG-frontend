import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser} from "@fortawesome/free-solid-svg-icons";


const NavMain = () => {
  return (
 <nav className="nav-main">
   <ul className="all-list">
     <div className="nav-menu"> 
<li><NavLink to="/menu">Menu</NavLink></li></div>
<div className="logo" > 
<li><NavLink exact to="/">MEG</NavLink></li></div>
<div  className="nav-end"> 
<li><NavLink to="/search-bar"><FontAwesomeIcon icon={faSearch}/><input type="text"/></NavLink></li>
<li><NavLink to="/login"><FontAwesomeIcon icon={faUser}/>Connectez-vous</NavLink></li>
<li><NavLink to="/shopping-cart"><FontAwesomeIcon icon={faShoppingCart}/>Panier</NavLink></li>
</div>

   </ul>
 </nav>
  );
}

export default NavMain;