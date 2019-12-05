import React from "react";
const cloudinary = require("./../config/cloudinary");

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="slideshow">
        <ul className="Content">
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
