import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ManageProducts = ()=> {


    return (
      <div>
        <h1>Créer un article</h1>
        <div className="buttons">
        <a href="/create-vetement" className="manage-button">
          Créer un vêtement
        </a>
        <a href="/create-lingerie" className="manage-button">
         Créer une lingerie
        </a>
      </div>
      </div>
    );
  }

//   <div className="buttons">
//         <button className="button" id="manage-button">Créer un vétement</button>
//         <button className="button" id="manage-button">Créer une lingerie</button>
//       </div>

  export default ManageProducts;
