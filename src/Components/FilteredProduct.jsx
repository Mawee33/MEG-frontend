import React, {useState, useEffect} from "react";
import axios from "axios";

const FilteredProduct = () => {
const searchQuery = e.target.value;
const [...this.props.vetements] = useState();
useEffect(() => {
  axios
  .get(process.env.REACT_APP_BACKEND_URL + "/lingeries/" + "/vetements/" + lingerieId + vetementId)
  .then(res => {
    setProduct(res.data);
  })
  .catch(err => {
    console.log(err)
  });
}, []);

if (!lingerie)  return <p>Pas de lingerie</p>;
  return (
    <div>
      <p>Affinez votre recherche</p>
      <table className="table">
        <thead>
          <tr>
            <th>Couleur</th>
            <th>Taille</th>
            <th>Prix</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default FilteredProduct;


state = {foods: [...this.props.foods] };

  filterFoods = e => {
    const searchQuery = e.target.value;
  }
  this.setState({ products: filterFoods });

  render() {
    return (
      <div>
        {this.props.foods.map((f, i) => (
          <SearchBar clbk={this.filterFoods}/>
          <Food
            key={i}
            name={f.name}
            calories={f.calories}
            image={f.image}
            quantity={f.quantity}
          />
        ))}
      </div>