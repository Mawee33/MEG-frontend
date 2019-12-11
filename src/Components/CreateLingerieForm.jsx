import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function CreateLingerie(props) {
  const [lingeries, setLingeries] = useState([]);
  const [formValues, setFormValues] = useState({});
  const selectRef = useRef();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/lingeries")
      .then(res => {
        setLingeries(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formValues.lingeries) {
      formValues.lingeries = selectRef.current.value;
    }
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/lingeries", formValues)
      .then(res => {
        props.history.push("/lingeries");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="createForm">
      <h1>Créer un nouvel article de lingerie</h1>

      <form onSubmit={handleSubmit} onChange={handleChange} className="create-form">
        <div className="form-item">
        <label htmlFor="image">Image du produit</label>
        <input name="image" id="product-image" type="file" className="product-create"/>
        </div>

        <div className="form-item">
        <label htmlFor="name">Nom du produit</label>
        <input type="text" name="Nom" class="product-create"/>
        </div>
        
        <div className="form-item">
        <label htmlFor="description">Description du produit</label>
        <input type="text" name="description" class="product-create"/>
        </div>

        <div className="form-item">
        <label htmlFor="type">Type du produit</label>
        <input type="text" name="type" class="product-create"/>
        </div>

        <div className="form-item">
        <label htmlFor="color">Couleurs disponibles</label>
        <input type="text" name="color" class="product-create"/>
        </div>

        <div className="form-item">
        <label htmlFor="size">Tailles disponibles</label>
        <input type="text" name="size" class="product-create"/>
        </div>

        <div className="form-item">
        <label htmlFor="price">Prix du produit</label>
        <input type="text" name="price" class="product-create"/>
        </div>

        <div className="form-item">
        <label htmlFor="quantity">Quantité disponible</label>
        <input type="text" name="quantité" class="product-create"/>
        </div>

        {/* <select ref={selectRef} name="artist">
        {artists.map((artist, i) => (
          <option key={i} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select> */}

<div className="button-create"><button className="manage-button" id="button">Créer</button></div>
      </form>
    </div>
  );
}
