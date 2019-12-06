import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Vetement = props => {
  const vetementId = props.match.params.id;

  const [vetement, setVetement] = useState(null);
  const [formValues, setFormValues] = useState({});
  const selectRef = useRef();

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


  const handleSubmit = e => {
    console.log(formValues + "ok");

e.preventDefault();
if(!formValues.vetement) {
    formValues.vetement = selectRef.current.value;
}
axios
.post(process.env.REACT_APP_BACKEND_URL + "/ShoppingCart", formValues)
.then(res => {
    props.history.push("/ShoppingCart");
})
.catch(err => {
    console.log(err);
})
}

const handleChange = e => {
console.log(formValues + "ok");
setFormValues({...formValues, [e.target.name]: e.target.value});
}

  if (!vetement) return <p>Pas de vetement</p>;

  return (
    <div className="background">
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
          <li className="item-vetement">
            description : {vetement.description}
          </li>
          <li className="item-vetement">catégorie : {vetement.type}</li>
          <li className="item-vetement">couleur : {vetement.color}</li>
          <li className="item-vetement">
            taille :
            {vetement.length < 2 ? (<select type="checkbox">{vetement.size}</select>
            )  : (
            <select type="checkbox">
              {vetement.size
                .sort((a, b) => a - b)
                .map((size, i) => (
                  <option key={i}>{size}</option>
                ))}
            </select>)}
          </li>
          <li className="item-vetement">prix : {vetement.price}€</li>
          <li className="item-vetement">
            quantité :
            {vetement.length < 2 ? (<select type="checkbox">{vetement.quantity}</select>
            )  : (
            <select type="checkbox">
              {vetement.quantity
                .sort((a, b) => a - b)
                .map((quantity, i) => (
                  <option key={i}>{quantity}</option>
              ))}
            </select>)
            } </li>
          <li>
            <button className="button"  onSubmit={handleSubmit} onChange={handleChange}>Ajouter au panier</button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Vetement;
