import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import UserContext from "../auth/UserContext";
import APIhandler from "../api/APIHandler";

const NavAdmin = props => {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  function signOut() {
    console.log(props);
    APIhandler.post(`/signout`).finally(() => {
      props.history.push("/");
      setCurrentUser(null);
      props.navMobileStatusClbk()
      console.log("déconnection");
    });
  }

  return (
    <nav
      id="nav_mobile"s
      // onClick={props.navMobileClbk}
      className={`nav-main ${props.navMobileStatus ? "is-active" : ""}`}
    >
      <Dropdown />
      <div className="all-list">
        <div className="nav-end2">
          <div className="nav-logo">
            <NavLink exact className="link" activeClassName="is-active" to="/">
              <img
                src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1576138123/MEG/Text_logo_2_mnback.jpg"
                alt="MEG"
              />
            </NavLink>
          </div>
          <NavLink className="link" activeClassName="is-active" to="/">
            <FontAwesomeIcon icon={faSearch} />
            <p>&nbsp;</p>
            <input className="search" type="text" />
          </NavLink>
          <NavLink
            className="link"
            activeClassName="is-active"
            to="/manage-products"
          >
            Gérer mes produits
          </NavLink>
          <button
            className="link"
            activeClassName="is-active"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

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

export default withRouter(NavAdmin);
