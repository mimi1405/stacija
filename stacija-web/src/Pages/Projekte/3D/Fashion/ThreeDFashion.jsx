import React from "react";
import "../../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer";

export default function ThreeDFashion() {
  return (
    <>
      <section id="entry">
        <h1 className="projects-title threed">Fashion</h1>
        <div className="threedfashion-description">
          <p>
            Als digitale Modedesignerin arbeite ich mit 3D - Programmen und
            verschiedenen Tools. Meine Aufgabe ist es, zu verstehen, wie die
            Muster der Kleidung geformt und genäht werden. Außerdem nehme ich
            mir Zeit und sammle Fakten über Mode, Kleidung, Modedesign und
            Materialien.
          </p>
        </div>
      </section>
      <section id="entrytwo">
        <div className="routes">
          <Link to="/projekte/3d/fashion/outfits">
            <p className="route-text threed threedSize threedTextFashion">OUTFITS</p>
          </Link>
          <Link to="/projekte/3d/fashion/lookbooks">
            <p className="route-text threed threedSize threedTextFashion">LOOKBOOKS</p>
          </Link>
          <Link to="/projekte/3d/fashion/collabs">
            <p className="route-text threed threedSize threedTextFashion">COLLABS</p>
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}
