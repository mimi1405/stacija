import React from "react";
import "../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";

export default function ThreeD() {
  return (
    <div>
      <section id="entry">
        <h1 className="projects-title threed">3D</h1>
        <div className="routes">
          <Link to="/projekte/3d/render">
            <p className="route-text threed threedSize threedText">RENDER</p>
          </Link>
          <Link to="/projekte/3d/animation">
            <p className="route-text threed threedSize threedTextAnimation">ANIMATION</p>
          </Link>
          <Link to="/projekte/3d/fashion">
            <p className="route-text threed threedSize threedTextFashion">FASHION</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
