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
   <div>
   {!vetements.length ? (
            <p>Aucun vêtement disponible</p>
          ) : (
            vetements.map((v, i) => (
              <ul key={i}>
                <li><img src={v.image} alt={v.name} /></li>
                <li>{v.name}</li>
                <li>{v.description}</li>
                <li>{v.type}</li>
                <li>{v.color}</li>
                <li>{v.size}</li>
                <li>{v.price}</li>
                <li>{v.quantity}</li>
                </ul>
                ))
          )}
   </div>
    </div>
  );
}

export default ListeVetements;
