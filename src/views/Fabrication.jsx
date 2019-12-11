import React from "react";
import { Link } from "react-router-dom";

export default function Fabrication() {
  return (
    <div className="fabrication">
      <br />
      <br />
      <p> En cours de création </p>
      <br /> Retournez à &nbsp;
      <Link to="/">la page d'accueil</Link>
    </div>
  );
}
