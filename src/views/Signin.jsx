import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "./../auth/UserContext";
import APIHandler from "./../api/APIHandler";

export default function Signin(props) {
  const [email, setEmail] = useState("meg@meg.com");
  const [password, setPassword] = useState("12345");
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/signin", { email, password });
      setCurrentUser(apiRes.data.currentUser);
      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
      setCurrentUser(null);
    }
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="connection">Connectez-vous</h3>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className="label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input"
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn">ok</button>
      </form>
      <p className="client">
        Créer votre compte client{" "}
        <Link to="/signup" className="link">
          Ici
        </Link>
      </p>
    </React.Fragment>
  );
}
