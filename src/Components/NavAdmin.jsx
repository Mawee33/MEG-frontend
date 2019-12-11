import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const NavAdmin = (navMobileClbk, navMobileStatus) => {
  return (
      <div
      id="nav_mobile"
      onClick={navMobileClbk}
      className={`nav-main ${navMobileStatus ? "is-active" : ""}`}
      >
          <Dropdown />
    <nav className="nav-main">
      <div className="all-list">
      <div className="nav-end2">
      <div className="nav-logo">
    <NavLink exact className="link" activeClassName="is-active" to="/">
    <img
                src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575623422/MEG/Text_logo_xtajgv.jpg"
                alt="MEG"
              />
    </NavLink>
    </div>
    <NavLink className="link" activeClassName="is-active" to="/">
            <FontAwesomeIcon icon={faSearch} />
            <p>&nbsp;</p>
            <input className="search" type="text" />
    </NavLink>
    <NavLink className="link" activeClassName="is-active" to="/manage-products">
      Gérer mes produits
    </NavLink>
    <NavLink className="link" activeClassName="is-active" to="/signout">
      Sign out
    </NavLink>
    </div>
    </div>
  </nav>
  </div>
);
}


//     <nav className="nav-main">
//       <Dropdown />
//       <div className="all-list">
//         {/* <div className="nav-menu">
//           <li>
//             <NavLink to="/menu">
//               <FontAwesomeIcon icon={faBars} />
//               <p>&nbsp;</p>
//               Menu
//             </NavLink>
//           </li>
//         </div> */}

//         <div className="nav-end">
//           <div className="logo">
//             <NavLink exact to="/">
//               <img
//                 src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575623422/MEG/Text_logo_xtajgv.jpg"
//                 alt="MEG"
//               />
//             </NavLink>
//           </div>
//           <NavLink to="/">
//             <FontAwesomeIcon icon={faSearch} />
//             <p>&nbsp;</p>
//             <input className="search" type="text" />
//           </NavLink>

//           <NavLink to="/signin">
//             <FontAwesomeIcon icon={faUser} />
//             <p>&nbsp;</p>
//             Connectez-vous
//           </NavLink>

//           {/* <NavLink to="/ShoppingCart">
//             <FontAwesomeIcon icon={faShoppingCart} />
//             <p>&nbsp;</p>
//             Panier
//           </NavLink> */}
//         </div>
//       </div>
//     </nav>
//   );
// };

export default NavAdmin;
