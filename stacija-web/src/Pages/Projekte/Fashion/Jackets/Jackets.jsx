import React from 'react'
import "../../../../Styles/Projekte.scss";
import { Link } from "react-router-dom";
import Footer from '../../../../components/Footer';

export default function Jackets() {
  return (
    <div>
        <section id="entry">
        <h1 className="projects-title text_shadows">Jackets</h1>
        <div className="routes">
          <Link to="/projekte/fashion/jackets/saqu">
            <p className="route-text hovatwo">SAQU</p>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
