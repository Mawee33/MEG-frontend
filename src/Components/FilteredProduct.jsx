import React from "react";
import axios from "axios";

const FilteredProduct = () => {
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
