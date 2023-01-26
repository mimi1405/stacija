import React from "react";
import ImageGallery from "../../../../components/Gallery/ImageGallery";
import Footer from "../../../../components/Footer";
import "../../../../Styles/Drawings.css";
import "../../../../Styles/Projekte.scss";
import Richard from "../../../../assets/Drawings/Sketches/skizzen/Zeichnug-Richard.png";
import Boot from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Boot.png";
import Fischfrau from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Fischfrau.png";
import Hand from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Hand.png";
import Mädchen from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Mädchen.png";
import Schloss from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Schloss.jpg";
import SkizzeStyle from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-SkizzeStyle.png";
import Treppen from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Treppen.png";
import Zimmer from "../../../../assets/Drawings/Sketches/skizzen/Zeichnung-Zimmer.png";

export default function Sketches() {
  const data = [
    { thumbnail: Richard, index: 1 },
    { thumbnail: Boot, index: 2 },
    { thumbnail: Fischfrau, index: 3 },
    { thumbnail: Hand, index: 4 },
    { thumbnail: Mädchen, index: 5 },
    { thumbnail: Schloss, index: 6 },
    { thumbnail: SkizzeStyle, index: 7 },
    { thumbnail: Treppen, index: 8 },
    { thumbnail: Zimmer, index: 9 },
  ];
  return (
    <>
      <section className="introduction">
        <div>
          <h1 className="twodtitle">Sketches</h1>
          <p className="description">
            Diverse Skizzen zu verschiedenen Themen.
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
