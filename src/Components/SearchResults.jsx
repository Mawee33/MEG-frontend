import React from 'react'
import { Link } from "react-router-dom";

export default function SearchResults() {
    return (
        <div className="search-results">
            {!Object.keys(data).length ? null : (
               <div className="category vetements">
                    <h4 className="title search">Résultats de votre recherche</h4>
                <ul className="searchlist">
                    {!data.vetements.length && data.vetements.map((v, i) => (
                        <li key={i} className="item">
                            <Link className="link" to={`/vetements/${v._id}`}>{v.name}</Link>
                        </li>
                    ))}
                </ul>
                </div>
            <div className="category lingerie">
                <h4 className="title search">Résultats de la recherche</h4>
                <ul className="searchlist">
                    {!data.lingerie.length && data.lingerie.map((v, i) => (
                    <li key={i} className="item">
                        <Link className="link" to={`/lingerie/${v._id}`}>{v.name}</Link>}
                    </li>
                    ))}
                </ul>
            )}
            
        </div>
    )
};
