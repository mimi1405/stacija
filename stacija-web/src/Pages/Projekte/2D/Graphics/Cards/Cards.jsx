import React from "react";

import Card1 from "../../../../../assets/Graphics/BusinessCards/AL1-KreditKarte.png";
import Card2 from "../../../../../assets/Graphics/BusinessCards/AL2-Kreditkarte.jpg";
import Card3 from "../../../../../assets/Graphics/BusinessCards/AL3-Kreditkarte.jpg";
import Card4 from "../../../../../assets/Graphics/BusinessCards/MeineKarte.jpg";

import "../../../../../Styles/AnalogPictures.css";
import Footer from "../../../../../components/Footer";
import ImageGallery from "../../../../../components/Gallery/ImageGallery";

export default function Cards() {
  const data = [
    { thumbnail: Card1, index: 1 },
    { thumbnail: Card2, index: 2 },
    { thumbnail: Card3, index: 3 },
    { thumbnail: Card4, index: 4 },
  ];
  return (
    <>
      <section className="analog-introduction">
        <div>
          <h1 className="twodtitle">Business-Cards</h1>
          <p className="analog-description">
            Im Kunstunterricht haben wir gelernt, wie man aus zwei Buchstaben
            ein Muster entwirft. Für diese Aufgabe haben wir mit InDesign
            gearbeitet. Am Ende benutzten wir die Muster für unsere eigene
            Visitenkarte.
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
