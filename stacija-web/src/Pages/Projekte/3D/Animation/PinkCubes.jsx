import React from "react";
import PinKCubeVid from "../../../../assets/3d/Animations/Videos/PinkeWürfel.mp4";
import Footer from "../../../../components/Footer";
import VideoBG from "../../../../components/Video/VideoBG";
import "../../../../Styles/Animations.css";
import "../../../../Styles/Projekte.scss";

export default function PinkCubes() {
  return (
    <>
      <section id="entry-cubes">
        <h1 className="cubes cubestitle"><span className="pink-changing">Pink</span> Cubes</h1>
        <div className="cubes-container-description">
          <p>
            Einer meiner Lieblingseffekte sind zerbröckelnde Objekte.<br/>
            Hier verwende ich einen pinken Würfel im Blender.
          </p>
        </div>
      </section>
      <section id="entry-cubes">
        <div className="cubes-container">
          <VideoBG source={PinKCubeVid} />
        </div>
      </section>
      <Footer />
    </>
  );
}
