import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Menu from "./components/Menu";
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

// auth
import { useAuth } from "./auth/useAuth";
import UserContext from "./auth/UserContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() =>{
    const localCart = localStorage.getItem("cart");
    if(localCart !== null){
        setCart(JSON.parse(localCart))
    }
  }, [] )

  const handleCart = value => {
    const copy = [...cart];
    copy.push(value);
    localStorage.setItem("cart", JSON.stringify(copy));
    setCart(copy);
  };

  return (
    <div className="App">
      <NavMain  />
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
            <ShoppingCart handleCart={handleCart} cart={cart} {...props} />
          )}
        />
        <Route path="/FilteredProduct" component={FilteredProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
