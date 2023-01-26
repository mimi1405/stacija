import React from "react";
import "../../../../../Styles/Fashion.css";
import Footer from "../../../../../components/Footer";
import VideoBG from "../../../../../components/Video/VideoBG";
import Dots from "../../../../../assets/dots.mp4";
import PresentationImage from "../../../../../assets/saqu1.png";
import SaquF from '../../../../../assets/saqufront.png'
import SaquS from '../../../../../assets/saquside.png'
import Carousel from "../../../../../components/Carousel/Carousel";


export default function SAQU() {

  const data = [
    SaquF, SaquS
  ]

  return (
    <div>
      <section id="container">
        <VideoBG source={Dots} />
        <div className="image-wrapper-fashion">
          <div>
            <h1 className="image-title-fashion">SAQU</h1>
            <img src={PresentationImage} />
          </div>
        </div>
      </section>
      <section id="container">
        <div className="explanation-wrapper">
          <h2 className="saqu-explanation-title">What??</h2>
          <p>An der <a className="school" href="https://ffzh.ch/">F+F Schule für Kunst und Design</a> hatten wir eine Projektwoche in Modedesign. Unsere Lehrerin war eine talentierte Modedesignerin, die uns Tipps zum Thema Mode gegeben hat. Mit ihr konnten wir ein Kleidungsstück aus weißen Hemden entwerfen. Ich war in einer Zweiergruppe mit einem Kollegen. Wir entwarfen Skizzen und Ideen für dieses Projekt. Am Ende haben wir eine Präsentation über unsere selbstgemachte Pufferjacke gehalten. Der Kollege hat das Plakat entworfen und ich habe die Jacke genäht. Wir beschlossen, der Jacke eine Marke zu geben: SAQU. </p>
        </div>
      </section>
      <section id="container-fluid">
          <Carousel Data={data} />
      </section>
      <Footer />
    </div>
  );
}
