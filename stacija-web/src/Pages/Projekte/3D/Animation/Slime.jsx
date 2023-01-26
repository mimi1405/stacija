import React from "react";
import SlimeVid from "../../../../assets/3d/Animations/Videos/Slime.mp4";
import Explanation from '../../../../assets/3d/Animations/explenation.png'
import Footer from "../../../../components/Footer";
import VideoBG from "../../../../components/Video/VideoBG";
import "../../../../Styles/Animations.css";
import "../../../../Styles/Projekte.scss";

export default function Slime() {
  return (
    <>
      <section id="entry-cubes">
        <h1 className="slimy">Slimy</h1>
        <div className="cubes-container-description">
          <p>
            Eine meiner kompliziertesten Animationen ist die hier genannte
            "Slime Animation". Ich habe versucht, etwas Abstraktes zu
            animieren, das cool und verspielt aussieht.
          </p>
        </div>
      </section>
      <section id="entry-cubes">
        <div className="cubes-container">
          <VideoBG source={SlimeVid} />
        </div>
        <div className="cubes-container">
          <img className="explenation-img" src={Explanation} />
        </div>
      </section>
      <Footer />
    </>
  );
}
