import React from "react";
import VideoBG from "../../../../components/Video/VideoBG";
import "../../../../Styles/Animations.css";
import "../../../../Styles/Projekte.scss";
import MeltingSilver from "../../../../assets/3d/Animations/Videos/STACIJA-Melting-Silver.mp4";
import MeltingGreen from "../../../../assets/3d/Animations/Videos/STACIJA-Melting-Green.mp4";
import Footer from "../../../../components/Footer";

/**
 * TODO: LINKS einfügen
 * @returns
 */
export default function SilverMelting() {
  return (
    <>
      <section id="entry">
        <h1 className="animation-melting-title">
          <span className="stacija">STACIJA</span>{" "}
          <span className="melting melt">Melting</span>
        </h1>
      </section>
      <section id="melting-container">
        <h1 className="">
          <span className="silver">Silver</span>{" "}
          <span className="melting">Melting</span>
        </h1>
        <div>
          <VideoBG source={MeltingSilver} />
          <p>
            Meine allererste Animation war diese mit Liquid Silver. Für diesen
            Effekt musste ich mir mehrere Videos über "Quick effects in Blender"
            ansehen. Am Anfang gab es Komplikationen, aber das Endergebnis ist
            großartig geworden.
          </p>
        </div>
      </section>
      <section id="melting-container">
        <h1 className="">
          <span className="green">Green</span>{" "}
          <span className="melting">Melting</span>
        </h1>
        <div>
          <p>
            Die gleiche nochmals in grün. Ich habe 2 Versionen kreiert.
          </p>
          <VideoBG source={MeltingGreen} />
        </div>
      </section>
      <Footer />
    </>
  );
}
