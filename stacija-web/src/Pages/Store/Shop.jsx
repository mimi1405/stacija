import React from "react";
import Footer from "../../components/Footer";
import ShopGallery from "../../components/Gallery/ShopGallery";
import BonsaiBaum from "../../assets/Drawings/Paintings/BonsaiBaum.png";
import BunteFrau from "../../assets/Drawings/Paintings/BunteFrau.png";
import Fahrrad from "../../assets/Drawings/Paintings/Fahrrad.png";
import GreenFace from "../../assets/Drawings/Paintings/GreenFace.png";
import Japan from "../../assets/Drawings/Paintings/Japan.png";
import Leonie from "../../assets/Drawings/Paintings/Leonie.png";
import Meerjungfrau from "../../assets/Drawings/Paintings/Meerjungfrau.png";
import OpenMinded from "../../assets/Drawings/Paintings/OpenMinded.png";
import Packen from "../../assets/Drawings/Paintings/Packen.png";
import RegenbogenFrau from "../../assets/Drawings/Paintings/RegenbogenFrau.png";
import Stoerung from "../../assets/Drawings/Paintings/Störung.png";
import TraurigerMond from "../../assets/Drawings/Paintings/TraurigerMond.png";
import TwoPersons from "../../assets/Drawings/Paintings/TwoPersons.png";
import "../../Styles/Shop.css";

export default function Shop() {

  /*
  !Only Test data => 26.01.2023, no actual sellable items
  */
  const data = [
    /* { thumbnail: BonsaiBaum, index: 1, title: "Bonsai Baum" },
    { thumbnail: BunteFrau, index: 2, title: "Bunte Frau" },
    { thumbnail: Fahrrad, index: 3, title: "Fahrrad" },
    { thumbnail: GreenFace, index: 4, title: "das grüne Gesicht" },
    { thumbnail: Japan, index: 5, title: "Japan." },
    { thumbnail: Leonie, index: 6, title: "Léonie" },
    { thumbnail: Meerjungfrau, index: 7, title: "die Meerjungfrau" },
    { thumbnail: OpenMinded, index: 8, title: "Open Minded" },
    { thumbnail: Packen, index: 9, title: "Packen." },
    { thumbnail: RegenbogenFrau, index: 10, title: "la femme Regenbogen" },
    { thumbnail: Stoerung, index: 11, title: "die Störung" },
    { thumbnail: TraurigerMond, index: 12, title: "Trauriger Mond :(" },
    { thumbnail: TwoPersons, index: 13, title: "zwei Personen" }, */
  ];

  return (
    <>
      <section id="shop-container">
        <div className="shoptext">
          <h1>
            <span id="stacija">STACIJA'S</span>
            <br /> Art Gallery
          </h1>
          <p>
            All sellable artworks are listed here!
            <br /> Each price on request.
            <br /> Write a{" "}
            <a id="shopmail" href="mailto:anastasija.lukic@mail.ch">
              mail
            </a>{" "}
            and reference the title of the specific artwork if you're
            interested.
          </p>
        </div>
      </section>
      <section id="shop-container">
        <ShopGallery images={data} />
      </section>
      <Footer />
    </>
  );
}
