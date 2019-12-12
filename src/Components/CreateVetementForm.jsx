import React, { Component } from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import APIHandler from "../api/APIHandler";

export default class CreateVetement extends Component {
  state = {
    image: null,
    name: "",
    description: "",
    type: "",
    price: 0,
    quantity: "",
    size: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("name", this.state.name);
    fd.append("description", this.state.description);
    fd.append("type", this.state.type);
    fd.append("price", this.state.price);
    fd.append("quantity", this.state.quantity);
    fd.append("size", this.state.size);

    try {
      await APIHandler.post("/vetements", fd);
      console.log("terminé");
      this.props.history.push("/vetements");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    console.log(e.target);
    if (e.target.name === "image") {
      console.log(e.target.files)
      this.setState({ image: e.target.files[0] });
    } else {
      if (e.target.name === "size")
        this.setState({ size: [...this.state.size, e.target.value] });
      else this.setState({ [e.target.name]: e.target.value });
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/vetements")
  //     .then(res => {
  //       setVetements(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!formValues.vetements) {
  //     formValues.vetements = selectRef.current.value;
  //   }
  //   axios
  //     .post(process.env.REACT_APP_BACKEND_URL + "/vetements", formValues)
  //     .then(res => {
  //       props.history.push("/vetements");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const handleChange = e => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };
  render() {
    const { image, name, description, type, price, quantity } = this.state;
    return (
      <div>
        <h1>Créer un nouveau vêtement</h1>

        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="create-form"
        >
          <div className="form-item">
            <label htmlFor="image">Image du produit</label>
            <input
              name="image"
              id="product-image"
              type="file"
              className="product-create"
            />
          </div>

          <div className="form-item">
            <label htmlFor="name">Nom du produit</label>
            <input type="text" name="name" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="description">Description du produit</label>
            <input type="text" name="description" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="type">Type du produit</label>
            <input type="text" name="type" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="color">Couleurs disponibles</label>
            <input type="text" name="color" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="size">Tailles disponibles</label>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="34"
              />
              <label for="34">34</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="36"
              />
              <label for="36">36</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="38"
              />
              <label for="38">38</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="40"
              />
              <label for="40">40</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="42"
              />
              <label for="42">42</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="44"
              />
              <label for="44">44</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="size"
                className="product-create"
                value="46"
              />
              <label for="46">46</label>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor="price">Prix du produit</label>
            <input type="number" name="price" class="product-create" />
          </div>

          <div className="form-item">
            <label htmlFor="quantity">Quantité disponible</label>
            <input type="text" name="quantity" class="product-create" />
          </div>

          {/* <select ref={selectRef} name="artist">
        {artists.map((artist, i) => (
          <option key={i} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select> */}

          <div className="button-create">
            <button className="manage-button" id="button">
              Créer
              <Link to="/vetements" className="link"></Link>{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
