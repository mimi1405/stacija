import React from "react";
import "../../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";
import '../../../../Styles/Graphics.css'
import Footer from "../../../../components/Footer";

export default function Graphics() {
  return (
    <>
      <section className="entry">
        <div>
          <h1 className="title">Graphics</h1>
          <div className="routelist">
            <Link to="/projekte/2d/graphics/analog-pictures">
              <p className="routetext ab">
                Analog Bilder
              </p>
            </Link>
            <Link to="/projekte/2d/graphics/go-far-come-close">
              <p className="routetext gfcc">Go Far Come Close</p>
            </Link>
            <Link to="/projekte/2d/graphics/cmyk-booklet">
              <p className="routetext cmyk"><span className="cmyk-letterc">C</span><span className="cmyk-letterm">M</span><span className="cmyk-lettery">Y</span><span className="cmyk-letterk">K</span>-Booklet</p>
            </Link>
            <Link to="/projekte/2d/graphics/business-cards">
              <p className="routetext bc">Business-Cards</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
