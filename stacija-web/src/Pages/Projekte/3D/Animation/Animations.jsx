import React from "react";
import "../../../../Styles/Projekte.scss";
import "../../../../Styles/Animations.css";

import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer";

export default function Animations() {
  return (
    <>
      <section id="entry">
        <h1 className="threed threedSize threedTextAnimation">Animations</h1>
        <div className="routes-wrapper">
          <div className="animation-routes-top">
            <Link to="/projekte/3d/animation/silver-melting">
              <div className="melt">
                Silver Melting
              </div>
            </Link>
            <Link to="/projekte/3d/animation/light-balls">
              <p className="animation-routes-text light ">
                <span className="light-spam">Light</span> Balls
              </p>
            </Link>
            <Link to="/projekte/3d/animation/pink-cubes">
              <p className="cube">
                <span className="pink-changing">Pink</span> Cubes
              </p>
            </Link>
          </div>
          <div className="animation-routes-bottom">
            <Link to="/projekte/3d/animation/explosion">
              <div className="explode">
                XPLOSION
              </div>
            </Link>
            <Link to="/projekte/3d/animation/slime">
              <div className="slimy">
                Slime
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
