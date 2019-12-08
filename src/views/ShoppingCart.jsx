import React, {useState, useEffect} from "react";
import axios from "axios";

const ShoppingCart = props => {
    console.log(props.cart)
    const vetementId = props.match.params.id;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_BACKEND_URL + "/ShoppingCart" + vetementId)
        .then(res => {
            setCart(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
  return (
    <div className="background">
      <h1 className="title-vetements">Panier</h1>
      {JSON.stringify(props.cart)}
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
                      src={c.image}
                      alt={c.name}
                      className="item-vetement-image"
                    />
                  </a>
                </div>
                    </li>
                <li className="item-vetement">{c.name}</li>
                <li className="item-vetement">{c.description}</li>
                {/* <li className="item-vetement">{l.type}</li>
                <li className="item-vetement">{l.color}</li> */}
                {/* <li className="item-vetement">{l.size}</li> */}
                <li className="item-vetement">{c.price}€</li>
                {/* <li className="item-vetement">{l.quantity}</li> */}
                </ul>
                ))
          )}
   </div>
    </div>
  );
}

export default ShoppingCart;

