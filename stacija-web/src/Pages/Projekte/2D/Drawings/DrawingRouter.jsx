import React from "react";
import "../../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer";

export default function DrawingRouter() {
  
  return (
    <>
      <section id="entry">
        <h1 className="twodtitle">Drawings</h1>
        <div className="routes">
          <Link to="/projekte/2d/drawings/paintings">
            <p className="route-text hova">Drawings</p>
          </Link>
          <Link to="/projekte/2d/drawings/sketches">
            <p className="route-text hova">Sketches</p>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
