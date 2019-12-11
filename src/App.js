import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NavMain from "./components/NavMain";
import Menu from "./components/Menu";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import Home from "./views/Home";
import Users from "./views/User";
import History from "./views/History";
import Fabrication from "./views/Fabrication";
import ListeVetements from "./views/ListeVetements";
import ListeLingeries from "./views/ListeLingeries";
import ShoppingCart from "./views/ShoppingCart";
import Vetement from "./views/Vetement";
import Lingerie from "./views/Lingerie";
import NotFound from "./views/NotFound";
import FilteredProduct from "./components/FilteredProduct";
import Footer from "./components/Footer";
import SignUp from "./views/Signup";
import SignIn from "./views/Signin";
import searchResults from "./components/SearchResults";

// auth
import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);
  const { isLoading } = useAuth();
  const [searchResults, setSearchResults] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart !== null) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  const handleSearchResults = results => {
    if (!results) return setSearchResults([]);
    if (!results.vetements.length || results.lingeries.length)
      return setSearchResults(results);
  };
  const handleCart = value => {
    const copy = [...cart];
    copy.push(value);
    localStorage.setItem("cart", JSON.stringify(copy));
    setCart(copy);
  };

  const UserContextValue = {
    currentUser,
    setCurrentUser
  };
  // const App = function App(props) {
  //   const { isLoading } = useAuth();
  //   const [navMobileStatus, setNavMobileStatus] = useState(false);
  //   const [searchResults, setSearchResults] = useState([]);
  //   const [currentUser, setCurrentUser] = useState({});
  //   // MANDATORY TO GET/SET currentUser according to server response
  //   // check src/auth/UserContext
  //   const UserContextValue = {
  //     currentUser,
  //     setCurrentUser
  //   };

  const handleDelete = index => {
    console.log(index);
    const filteredCart = cart.filter((item, i) => i !== index);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  const handleQuantity = index=> {
    const modifiedQuantity = cart.map((prod, i)=> {
      if(i ===   index ) prod.quantity -= 1
      return prod;  
    });
    console.log("modifed", modifiedQuantity);
    setCart(modifiedQuantity);
    localStorage.setItem("cart", JSON.stringify(modifiedQuantity));
  };

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <UserContext.Provider value={UserContextValue}>
      <div className="App">
        <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/users" component={Users} />
          <Route path="/Histoire" component={History} />
          <Route exact path="/vetements" component={ListeVetements} />
          <Route
            path="/vetements/:id"
            render={props => (
              <Vetement handleCart={handleCart} cart={cart} {...props} />
            )}
          />
          <Route exact path="/lingeries" component={ListeLingeries} />
          <Route path="/lingeries/:id" component={Lingerie} />
          <Route path="/Fabrication" component={Fabrication} />
          <Route path="/SearchBar" component={SearchBar} />
          <Route
            path="/ShoppingCart"
            render={props => (
              <ShoppingCart
                handleCart={handleCart}
                handleDelete={handleDelete}
                handleQuantity={handleQuantity}
                cart={cart}
                {...props}
              />
            )}
          />
          <Route path="/FilteredProduct" component={FilteredProduct} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/* else => 404 */}
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
