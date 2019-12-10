import React, { useState, useEffect } from "react";
import axios from "axios";
import apiHandler from "../api/APIHandler";

const ShoppingCart = ({ cart, match, handleDelete, handleQuantity }) => {
  console.log(cart);
  const vetementId = match.params.id;

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/ShoppingCart")
  //     .then(res => {
  //       setRessources(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //     axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/ShoppingCart" + vetementId)
  //     .then(res => {
  //         setCart(res.data);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }, []);

  const handleSubmit = index => {
    // e.preventDefault();
    handleDelete(index);
    // console.log(index);
  };

  const handleSubmitBis = i => {
    // e.preventDefault();
    handleQuantity(i);
    // console.log(index);
  };

  // return null;
  return (
    <div className="background">
      <h1 className="title-vetements">Panier</h1>

      <div className="all-vetements">
        {!Boolean(cart.length) ? (
          <p>Aucun article dans le panier</p>
        ) : (
          cart.map((c, i) => (
            <ul key={i} className="list-vetements">
              {/* <li>
                <pre style={{"whiteSpace": "pre-wrap"}}>
                {JSON.stringify(c)}
                </pre>
              </li> */}
              <li className="item-vetement">
                <div>
                  <a href={"/cart/" + c._id}>
                    <img
                      src={c.vetement.image}
                      alt={c.vetement.name}
                      className="item-vetement-image"
                    />
                  </a>
                </div>
              </li>
              <li className="item-vetement">{c.vetement.name}</li>
              <li className="item-vetement">{c.vetement.description}</li>
              {/* <li className="item-vetement">{l.type}</li>
                <li className="item-vetement">{l.color}</li> */}
              <li className="item-vetement">{c.size}</li>
              <li className="item-vetement">{c.vetement.price}€</li>
              <li className="item-vetement">
                {c.quantity}{" "}
                <button
                  onClick={() => {
                    handleSubmitBis(i);
                  }}
                >
                  x
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleSubmit(i);
                  }}
                >
                  Supprimer
                </button>
              </li>
            </ul>
          ))
        )}
      </div>
      <div className="totalCase">
      <h2 className="total">Total</h2>
      {/* <p>
       {cart.map((c, i) => {
<p>{c.cart.price}</p>
       })}
      </p> */}
      </div>
    </div>
  );
};

export default ShoppingCart;
