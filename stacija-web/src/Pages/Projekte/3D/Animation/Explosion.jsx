import React from "react";
import VideoBG from "../../../../components/Video/VideoBG";
import "../../../../Styles/Animations.css";
import "../../../../Styles/Projekte.scss";
import ExplosionVideo from "../../../../assets/3d/Animations/Videos/Explosion.mp4";
import Footer from "../../../../components/Footer";

export default function Explosion() {
  return (
    <>
      <section id="animation-container-lights">
        <div>
          <h1 className="explosion">XPLOSION</h1>
          <p>
            Explosionen fand ich schon immer cool. Deswegen machte ich eine
            Explosion mit leuchtenden Würfeln.
          </p>
          <div className="expl-container">
            <VideoBG source={ExplosionVideo} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
