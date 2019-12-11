import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ManageProducts = props => {
    const [vetements, setVetements] = useState([]);
    const [formValues, setFormValues] = useState({});
    const selectRef = useRef();
}

useEffect(() => {
  axios
    .get(process.env.REACT_APP_BACKEND_URL + "/vetements")
    .then(res => {
      setVetements(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formValues.vetements) {
      formValues.vetements = selectRef.current.value;
    }
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/vetements", formValues)
      .then(res => {
        props.history.push("/vetements");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div>
    <h1>Créer un nouveau vêtement</h1>

    <form  onSubmit={handleSubmit} onChange={handleChange}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title" />

      <label htmlFor="">Description@</label>
      <input type="text" name="description" />

      <select ref={selectRef} name="artist">
        {artists.map((artist, i) => (
          <option key={i} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select>
      
      <button>Créer</button>
    </form>
  </div>
  );
        

export default ManageProducts;