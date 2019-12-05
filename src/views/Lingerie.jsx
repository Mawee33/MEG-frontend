import React, { useState, useEffect } from "react";
import axios from "axios";

const Lingerie = props => {
  console.log(props);
  const lingerieId = props.match.params.id;

  const [lingerie, setLingerie] = useState({});
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/lingeries/" + lingerieId)
      .then(res => {
        setLingerie(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="background">
  <ul className="one-vetements">
       <li className="item-vetement">
                    <img
                      src={lingerie.image}
                      alt={lingerie.name}
                      className="one-vetement-image"
                    />
              </li>
              <div className="text-vetement">
              <li className="item-vetement">{lingerie.name}</li>
              <li className="item-vetement">description : {lingerie.description}</li>
              <li className="item-vetement">catégorie : {lingerie.type}</li>
                <li className="item-vetement">couleur : {lingerie.color}</li>
              <li className="item-vetement">taille : <select type="checkbox"><option value="">{lingerie.size} </option></select></li>
              <li className="item-vetement">prix :  {lingerie.price}€</li>
              <li className="item-vetement" >qantité : <select type="checkbox"><option value="">{lingerie.quantity}</option></select></li>
              <li><button className="button">Ajouter au panier</button></li>
              </div>
  </ul>
  </div>
  )};

export default Lingerie;
