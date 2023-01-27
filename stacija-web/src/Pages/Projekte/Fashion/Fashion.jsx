import React from 'react'
import "../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";
import Footer from '../../../components/Footer';

export default function Fashion() {
  return (
    <div>
        <section id="entry">
        <h1 className="projects-title text_shadows">Fashion</h1>
        <div className="routes">
          <Link to="/projekte/fashion/jackets">
            <p className="route-text hovatwo">Jackets</p>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
