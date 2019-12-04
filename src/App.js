import React from "react";
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
import ShoppingCart from "./views/ShoppingCart";

function App() {
  return (
    <div className="App">
      <NavMain /><Menu/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/Histoire" component={History} />
        <Route path="/ListeVetements" component={ListeVetements} />
        <Route path="/Fabrication" component={Fabrication} />
        <Route path="/SearchBar" component={SearchBar} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;
