import React, { useState, useEffect } from "react";
import axios from "axios";

const Lingerie = props => {
  console.log(props);
  const lingerieId = props.match.params.id;
  const [lingerie, setLingerie] = useState(null);
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

  if (!lingerie) return <p>Pas de lingerie</p>;

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
          <li className="item-vetement">
            description : {lingerie.description}
          </li>
          <li className="item-vetement">catégorie : {lingerie.type}</li>
          <li className="item-vetement">couleur : {lingerie.color}</li>
          <li className="item-vetement">
            taille :
            {lingerie.length < 2 ? (
              <select type="checkbox">{lingerie.size}</select>
            ) : (
              <select type="checkbox">
                {lingerie.size
                  .sort((a, b) => a - b)
                  .map((size, i) => (
                    <option key={i}>{size}</option>
                  ))}
              </select>
            )}
          </li>
          <li className="item-vetement">prix : {lingerie.price}€</li>
          <li className="item-vetement">
            quantité :
            {lingerie.length < 2 ? (
              <select type="checkbox">{lingerie.quantity}</select>
            ) : (
              <select type="checkbox">
                {lingerie.quantity
                  .sort((a, b) => a - b)
                  .map((quantity, i) => (
                    <option key={i}>{quantity}</option>
                  ))}
              </select>
            )}{" "}
          </li>
          <li>
            <button className="button">Ajouter au panier</button>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Lingerie;

