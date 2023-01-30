import React from "react";
import One from "../../../../../assets/gofarcomeclose/GFCC1.png";
import Two from "../../../../../assets/gofarcomeclose/GFCC2.png";
import Three from "../../../../../assets/gofarcomeclose/GFCC3.png";
import Four from "../../../../../assets/gofarcomeclose/GFCC4.png";
import Five from "../../../../../assets/gofarcomeclose/GFCC5.png";
import Six from "../../../../../assets/gofarcomeclose/GFCC6.png";
import Seven from "../../../../../assets/gofarcomeclose/GFCC7.png";
import Eight from "../../../../../assets/gofarcomeclose/GFCC8.png";

import Footer from "../../../../../components/Footer";
import ImageGallery from "../../../../../components/Gallery/ImageGallery";
import "../../../../../Styles/AnalogPictures.css";
import "../../../../../Styles/Graphics.css";

export default function GoFarComeClose() {
  const data = [
    { thumbnail: One, index: 1 },
    { thumbnail: Two, index: 2 },
    { thumbnail: Three, index: 3 },
    { thumbnail: Four, index: 4 },
    { thumbnail: Five, index: 5 },
    { thumbnail: Six, index: 6 },
    { thumbnail: Seven, index: 7 },
    { thumbnail: Eight, index: 8 },
  ];
  return (
    <>
      <section className="analog-introduction">
        <div>
          <h1 className="twodtitle gfccmain">Go Far Come Close</h1>
          <p className="analog-description">
            Meistens haben wir verschiedene Dinge mit Texten und Schriftarten
            ausprobiert. In dieser Übung haben wir versucht, die Zusammensetzung
            der Wörter zu verändern. Je nach Position oder Größe kann der Satz
            "Go far. Come close" eine andere Wirkung haben.
          </p>
        </div>
      </section>
      <section className="images">
        <ImageGallery images={data} />
      </section>
      <Footer />
    </>
  );
}
