import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="quatrecentquatre">
      <br />
      <br />
      Oh non !!! Mauvaise route :(
      <br /> Retournez à &nbsp;
      <Link to="/">la page d'accueil</Link>
    </div>
  );
}
