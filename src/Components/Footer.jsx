import React from "./node_modules/react";
// import { Footer } from "react-router-dom";
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p>RETROUVEZ-NOUS SUR LES RESEAUX SOCIAUX</p>
        <FontAwesomeIcon icon={["fab", "instagram"]} />
        <p>&nbsp;</p>
        <FontAwesomeIcon icon={["fab", "pinterest"]} />
        <p>&nbsp;</p>
        <FontAwesomeIcon icon={["fab", "facebook"]} />
        <div id="infos-footer">
          <div className="last-info">
            <h6>LIVRAISON</h6>
            <p className="legal">Au choix : Colissimo ou Chronopost</p>
          </div>
          <div className="last-info">
            <h6>PAIEMENT</h6>
            <p className="legal">100% sécurisé CB ou PayPal</p>
          </div>
          <div className="last-info">
            <h6>RETOURS</h6>
            <p className="legal">Satisfait ou remboursé </p>
          </div>
          <div className="last-info">
            <h6>FRAIS DE PORT</h6>
            <p className="legal">Offerts à partir de 80€ d'achat (France)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
