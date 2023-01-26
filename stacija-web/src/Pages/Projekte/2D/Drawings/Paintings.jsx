import React from "react";
import ImageGallery from "../../../../components/Gallery/ImageGallery";
import BonsaiBaum from "../../../../assets/Drawings/Paintings/BonsaiBaum.png";
import BunteFrau from "../../../../assets/Drawings/Paintings/BunteFrau.png";
import Fahrrad from "../../../../assets/Drawings/Paintings/Fahrrad.png";
import GreenFace from "../../../../assets/Drawings/Paintings/GreenFace.png";
import Japan from "../../../../assets/Drawings/Paintings/Japan.png";
import Leonie from "../../../../assets/Drawings/Paintings/Leonie.png";
import Meerjungfrau from "../../../../assets/Drawings/Paintings/Meerjungfrau.png";
import OpenMinded from "../../../../assets/Drawings/Paintings/OpenMinded.png";
import Packen from "../../../../assets/Drawings/Paintings/Packen.png";
import RegenbogenFrau from "../../../../assets/Drawings/Paintings/RegenbogenFrau.png";
import Stoerung from "../../../../assets/Drawings/Paintings/Störung.png";
import TraurigerMond from "../../../../assets/Drawings/Paintings/TraurigerMond.png";
import TwoPersons from "../../../../assets/Drawings/Paintings/TwoPersons.png";
import "../../../../Styles/Drawings.css";
import "../../../../Styles/Projekte.scss";
import Footer from "../../../../components/Footer";

export default function Drawings() {
  const data = [
    { thumbnail: BonsaiBaum, index: 1 },
    { thumbnail: BunteFrau, index: 2 },
    { thumbnail: Fahrrad, index: 3 },
    { thumbnail: GreenFace, index: 4 },
    { thumbnail: Japan, index: 5 },
    { thumbnail: Leonie, index: 6 },
    { thumbnail: Meerjungfrau, index: 7 },
    { thumbnail: OpenMinded, index: 8 },
    { thumbnail: Packen, index: 9 },
    { thumbnail: RegenbogenFrau, index: 10 },
    { thumbnail: Stoerung, index: 11 },
    { thumbnail: TraurigerMond, index: 12 },
    { thumbnail: TwoPersons, index: 13 },
  ];
  console.log(data);
  return (
    <>
      <section className="introduction">
        <div>
          <h1 className="twodtitle">Drawings</h1>
          <p className="description">
            Diverse Zeichnungen zu verschiedenen Themen.
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
