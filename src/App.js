import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import Home from "./views/Home";
import Users from "./views/User";
import History from "./views/History";
import Fabrication from "./views/Fabrication";
import ListeVetements from "./views/ListeVetements";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/Histoire" component={History} />
        <Route path="/ListeVetements" component={ListeVetements} />
        <Route path="/Fabrication" component={Fabrication} />
      </Switch>
    </div>
  );
}

export default App;
