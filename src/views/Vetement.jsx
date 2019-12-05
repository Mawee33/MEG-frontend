import React, { useState, useEffect } from "react";
import axios from "axios";

const Vetement = props => {
  console.log(props);
  const vetementId = props.match.params.id;

  const [vetement, setVetement] = useState({});
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/vetements/" + vetementId)
      .then(res => {
        setVetement(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
  <ul className="one-vetements">
       <li className="item-vetement">
                    <img
                      src={vetement.image}
                      alt={vetement.name}
                      className="one-vetement-image"
                    />
              </li>
              <div className="text-vetement">
              <li className="item-vetement">{vetement.name}</li>
              <li className="item-vetement">description : {vetement.description}</li>
              <li className="item-vetement">catégorie : {vetement.type}</li>
                <li className="item-vetement">couleur : {vetement.color}</li>
              <li className="item-vetement">taille : <select type="checkbox"><option value="">{vetement.size} </option></select></li>
              <li className="item-vetement">prix :  {vetement.price}€</li>
              <li className="item-vetement" >qantité : <select type="checkbox"><option value="">{vetement.quantity}</option></select></li>
              <li><button>Ajouter au panier</button></li>
              </div>
  </ul>
  )};

export default Vetement;
