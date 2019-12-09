import React, {useState, useEffect} from "react";
import axios from "axios";

const ShoppingCart = ({ cart , match}) => {
    console.log(cart)
    const vetementId = match.params.id;
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


  return (
    <div className="background">
      <h1 className="title-vetements">Panier</h1>

   <div className="all-vetements">
   {!cart.length ? (
            <p>Aucune article dans le panier</p>
          ) : (
            cart.map((c, i) => (
              <ul key={i} className="list-vetements">
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
                <li className="item-vetement">{c.vetement.size}</li>
                <li className="item-vetement">{c.vetement.price}€</li>
                <li className="item-vetement">{c.vetement.quantity}</li>
                </ul>
                ))
          )}
   </div>
    </div>
  );
}

export default ShoppingCart;

