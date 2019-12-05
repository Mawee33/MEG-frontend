import React from "react";
// const cloudinary = require("./../config/cloudinary");

const Home = () => {
  return (
    <div className="firstView">
      <h1>LOOKBOOK</h1>
      <h4>Découvrez notre selection</h4>
      <div className="slideshow">
        <ul className="Content">
          <li>
            <img
              className="intro"
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575532226/MEG/fashion-1031469_1920_ybijwc.jpg"
              alt="dressing"
            />
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
