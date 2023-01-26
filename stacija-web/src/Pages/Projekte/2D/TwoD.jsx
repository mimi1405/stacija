import React from "react";
import "../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

export default function TwoD() {
  return (
    <div>
      <section id="entry">
        <h1 className="twodtitle">2D</h1>
        <div className="routes">
          <Link to="/projekte/2d/drawings">
            <p className="route-text hover">Drawings</p>
          </Link>
          <Link to="/projekte/2d/graphics">
            <p className="route-text hover">Graphics</p>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
