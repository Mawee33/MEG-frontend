import React, {useState, useEffect} from "react";
import axios from "axios";

const ListeVetements = props => {
    const [vetements, setVetements] = useState([]);

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_BACKEND_URL + "/vetements")
        .then(res => {
            setVetements(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
  return (
    <div>
      <h1>Vetements</h1>
   <div className="all-vetements">
   {!vetements.length ? (
            <p>Aucun vêtement disponible</p>
          ) : (
            vetements.map((v, i) => (
              <ul key={i} className="list-vetements">
                <li className="item-vetement"><img src={v.image} alt={v.name} className="item-vetement-image" /></li>
                <li className="item-vetement">{v.name}</li>
                <li className="item-vetement">{v.description}</li>
                {/* <li className="item-vetement">{v.type}</li>
                <li className="item-vetement">{v.color}</li> */}
                {/* <li className="item-vetement">{v.size}</li> */}
                <li className="item-vetement">{v.price}€</li>
                {/* <li className="item-vetement" >{v.quantity}</li> */}
                </ul>
                ))
          )}
   </div>
    </div>
  );
}

export default ListeVetements;
