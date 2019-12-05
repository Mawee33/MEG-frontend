import React from "react";
// const cloudinary = require("./../config/cloudinary");

const Home = () => {
  return (
    <div className="firstView">
      <header>
        {/* <img
        className="intro"
        src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575532226/MEG/fashion-1031469_1920_ybijwc.jpg"
        alt="dressing"
      /> */}
        <h1>LOOKBOOK</h1>
        <h3>Découvrez notre selection</h3>
      </header>
      <div className="transition">
        <h2>SUIVEZ-NOUS</h2>
        <h4>#lesminettesengoguette</h4>
      </div>
      <section id="informations">
        <div class="informations">
          <div class="infoImg">
            <img
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575532200/MEG/people-2589862_1920_cocya2.jpg"
              alt="Nos produits"
            />
          </div>
          <div class="small-info">
            <h4>Produits</h4>
            <p>Venez découvrir notre gamme de vêtements pour toutes</p>
          </div>
        </div>

        <div class="informations">
          <div class="infoImg">
            <img
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575530772/MEG/IMG_3104_upjjt4.jpg"
              alt="La fabrication"
            />
          </div>
          <div class="small-info">
            <h4>Fabrication</h4>
            <p>
              Une production réalisée en France, avec des tissus fabriqués à
              base de fils issus de la porduction bilogique.
            </p>
          </div>
        </div>

        <div class="informations">
          <div class="infoImg">
            <img
              src="https://res.cloudinary.com/dfnnpxhx9/image/upload/v1575530772/MEG/IMG_3105_zhsliy.jpg"
              alt="mon histoire"
            />
          </div>
          <div class="small-info">
            <h4>Histoire</h4>
            <p>
              Tout part d'une envie de positiver et de profiter du savoir-faire
              français du monde la Mode.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
