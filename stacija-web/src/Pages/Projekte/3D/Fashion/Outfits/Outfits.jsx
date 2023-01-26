import React from "react";
import "../../../../../Styles/Projekte.scss";
import '../../../../../Styles/Outfit-Animations.scss'
import { Link } from "react-router-dom";
import Footer from "../../../../../components/Footer";

export default function Outfits() {
  return (
    <>
      <section id="entry-outfits">
        <h1 className="projects-title threed">Outfits</h1>
        <div className="routes routes-outfits">
          <Link to="/projekte/3d/fashion/outfits/pink-hearts">
            <p className="route-text-outfit threed">
              <span className="pink-changing">Pink</span> Hearts
            </p>
          </Link>
          <Link to="/projekte/3d/fashion/outfits/cursed-eyes">
            <p className="route-text-outfit threed-blood blood">
              Cursed Eyes
            </p>
          </Link>
          <Link to="/projekte/3d/fashion/outfits/cafè-latte">
            <p className="route-text-outfit threed-coffe">
              Cafè Latte
            </p>
          </Link>
        </div>
        <div className="routes routes-outfits">
        <Link to="/projekte/3d/fashion/outfits/white-collection">
            <p className="route-text-outfit">
              White-Collection
            </p>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
