import React from "react";
import VideoBG from "../../../../components/Video/VideoBG";
import "../../../../Styles/Animations.css";
import "../../../../Styles/Projekte.scss";
import LightBallsVideo from "../../../../assets/3d/Animations/Videos/LightBalls.mp4";
import Footer from "../../../../components/Footer";

export default function LightBalls() {
  return (
    <>
      <section id="animation-container-lights">
        <div>
          <h1 className="lighttitle">Light Balls</h1>
          <p>
            Ich liebe Objekte, die in Animationen leuchten. Für solche Effekte
            muss ich in Blender mit verschiedenen Lichtern arbeiten. Die
            Einstellungen für die Lichter machen bei solchen Renderings immer
            einen großen Unterschied.
          </p>
          <div>
            <VideoBG source={LightBallsVideo} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
