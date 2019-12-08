import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      Oh non !!!
      <br />
      Mauvaise route :( <br />
      Retournez à &nbsp;<Link to="/">Cette page</Link>
    </div>
  );
}
