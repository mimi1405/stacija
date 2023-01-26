import React from "react";
import "../../../../Styles/Render.css";
import "../../../../Styles/Projekte.scss";
import Bandana from "../../../../assets/3d/Render/render/Bandana.png";
import Gold from "../../../../assets/3d/Render/render/gold.png";
import Ice from "../../../../assets/3d/Render/render/Ice.png";
import KeiAhnig from "../../../../assets/3d/Render/render/keiahnig.jpg";
import Lila from "../../../../assets/3d/Render/render/lila.png";
import Morning from "../../../../assets/3d/Render/render/Morning.png";
import Silver from "../../../../assets/3d/Render/render/Silver.png";
import TwinFlames from "../../../../assets/3d/Render/render/TwinFlames.png";

import Footer from "../../../../components/Footer";
import Carousel from "../../../../components/Carousel/Carousel";

export default function Render() {
  const dataOne = [
    Bandana,
    Gold,
    Ice,
    KeiAhnig,
    Lila,
    Morning,
    Silver,
    TwinFlames,
  ];
  return (
    <>
      <section className="render-introduction">
        <div>
          <h1 className="threed render3dtitle">3D-Render</h1>
          <p className="render-description">
            Ein Rendering ist die Erstellung einer Grafik aus Rohdaten oder
            einer Skizze. Im Deutschen wird auch der unscharfe Begriff
            "Bildsynthese" verwendet. Beim Rendering in 3D geht es um die
            Umwandlung von dreidimensionalen Modellen in zweidimensionale
            Bilder. Einer der technisch komplexesten Prozesse im Rahmen einer
            3D-Produktion ist der Vorgang des Renderings.
            <br />
            <br />
            Blender ist eine Kombination von Werkzeugen für
            Videobildbearbeitung, Animation, Modellierung und Texturierung. Und
            DAZ Studio ist ein Werkzeug für dreidimensionale Kunst. Es ist für
            die Erstellung von Animationen und Rendering-Arbeiten geeignet.
          </p>
        </div>
      </section>
      <section className="images">
        <Carousel Data={dataOne} />
      </section>
      <section className="render-introduction">
        <div>
          <h1 className="threed render3dtitle">Meine Render</h1>
          <p className="render-description">
            Wenn ich ein neues Projekt beginne, erstelle ich eine Figur in
            <a id="info" href="https://www.daz3d.com/"> DAZ3D</a>. Dort kann ich verschiedene Gesichter verwenden, meine eigenen
            Posen entwickeln und den Körper der Figur anpassen. Dann entwerfe
            ich die Kleidung in <a id="info" href="https://www.clo3d.com/en/"> CLO3D</a> mit dem importierten Avatar. Dann
            exportiere ich die Figur mit der Kleidung nach <a id="info" href="https://www.blender.org/"> Blender</a>. In <a id="info" href="https://www.blender.org/"> Blender </a>
            kann ich den Avatar wieder umgestalten und verschiedene Texturen für
            Haut und Haare verwenden. Mit Objekten und Lichtern gestalte ich den
            Hintergrund. Ganz zum Schluss entscheide ich mich für einen
            gewünschten Blickwinkel, der gerendert werden soll.
            <br/>
            <br/>
            Eines der
            wichtigsten Dinge, die beim Rendern zu beachten sind, sind die
            Einstellungen für das Bild selbst. Wenn man dies falsch einstellt,
            wird die Qualität des Endergebnisses nicht gut sein.
            <br/>
            <br/>
            Alle
            Renderings, die ich bisher fertiggestellt habe, sollen eine
            Geschichte erzählen. Ich möchte, dass sich die Betrachter dieser
            Bilder ihre eigene Vision und Meinung bilden.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
