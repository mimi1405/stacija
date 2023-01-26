import React from "react";
import { useEffect } from "react";
import "../../Styles/Projekte.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Projekte() {
  function scrollToEnd() {
      window.scroll({
        top: 500,
        behavior: "smooth",
      });
  }

  useEffect(() => {
    window.setTimeout(scrollToEnd, 7000);
  }, []);

  return (
    <div>
      <section id="entry">
        <h1 className="projects-title text_shadows">PROJECTS</h1>
        <div className="routes">
          <Link to="/projekte/3d">
            <p className="route-text threed">3D.</p>
          </Link>
          <Link to="/projekte/2d">
            <p className="route-text hover">2D.</p>
          </Link>
          <Link to="/projekte/fashion">
            <p className="route-text hovertwo">Fashion.</p>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
