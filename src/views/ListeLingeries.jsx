import React, {useState, useEffect} from "react";
import axios from "axios";

const ListeLingeries = props => {
    const [lingeries, setLingeries] = useState([]);

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_BACKEND_URL + "/lingeries")
        .then(res => {
            setLingeries(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
  return (
    <div>
      <h1>Lingerie</h1>
   <div className="all-vetements">
   {!lingeries.length ? (
            <p>Aucune lingerie disponible</p>
          ) : (
            lingeries.map((l, i) => (
              <ul key={i} className="list-vetements">
                <li className="item-vetement">
                <div>
                  <a href={"/lingeries/" + l._id}>
                    <img
                      src={l.image}
                      alt={l.name}
                      className="item-vetement-image"
                    />
                  </a>
                </div>
                    </li>
                <li className="item-vetement">{l.name}</li>
                <li className="item-vetement">{l.description}</li>
                {/* <li className="item-vetement">{l.type}</li>
                <li className="item-vetement">{l.color}</li> */}
                {/* <li className="item-vetement">{l.size}</li> */}
                <li className="item-vetement">{l.price}€</li>
                {/* <li className="item-vetement">{l.quantity}</li> */}
                </ul>
                ))
          )}
   </div>
    </div>
  );
}

export default ListeLingeries;
