import React from "react";
import { Link } from "react-router-dom";

export default function SearchResults({ data }) {
  return (
    <div className="search-results">
      {!data.length ? null : (
        <React.Fragment>
          <div className="category vetements">
            <h4 className="title search">Résultats de votre recherche</h4>
            <ul className="searchlist">
              {data[0].length &&
                data[0].map((v, i) => (
                  <li key={i} className="item">
                    <Link className="link" to={`/vetements/${v._id}`}>
                      {v.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="category lingerie">
            <h4 className="title search">Résultats de la recherche</h4>
            <ul className="searchlist">
              {data[1].length &&
                data[1].map((v, i) => (
                  <li key={i} className="item">
                    <Link className="link" to={`/lingerie/${v._id}`}>
                      {v.name}
                    </Link>
                  </li>
                ))}
            </ul>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
