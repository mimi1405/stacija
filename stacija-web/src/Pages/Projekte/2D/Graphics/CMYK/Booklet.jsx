import React from "react";
import Booklet1 from "../../../../../assets/Graphics/cmykheft/Farbig1-Heft.jpg";
import Booklet2 from "../../../../../assets/Graphics/cmykheft/Farbig2-Heft.jpg";
import Booklet3 from "../../../../../assets/Graphics/cmykheft/Farbig3-Heft.png";
import Booklet4 from "../../../../../assets/Graphics/cmykheft/Farbig4-Heft.png";
import Booklet5 from "../../../../../assets/Graphics/cmykheft/Farbig5-Heft.png";
import Booklet6 from "../../../../../assets/Graphics/cmykheft/Farbig6-Heft.png";
import Booklet7 from "../../../../../assets/Graphics/cmykheft/Farbig7-Heft.png";
import Booklet8 from "../../../../../assets/Graphics/cmykheft/Farbig8-Heft.png";
import '../../../../../Styles/AnalogPictures.css'
import Footer from "../../../../../components/Footer";
import ImageGallery from "../../../../../components/Gallery/ImageGallery";

export default function Booklet() {
  const data = [
    { thumbnail: Booklet1, index: 1 },
    { thumbnail: Booklet2, index: 2 },
    { thumbnail: Booklet3, index: 3 },
    { thumbnail: Booklet4, index: 4 },
    { thumbnail: Booklet5, index: 5 },
    { thumbnail: Booklet6, index: 6 },
    { thumbnail: Booklet7, index: 7 },
    { thumbnail: Booklet8, index: 8 },
  ];
  return (
    <>
      <section className="analog-introduction">
        <div>
          <h1 className="twodtitle"><span className="cmyk-letterc-booklet">C</span><span className="cmyk-letterm-booklet">M</span><span className="cmyk-lettery-booklet">Y</span><span className="cmyk-letterk-booklet">K</span>-Booklet</h1>
          <p className="analog-description">
            An der F+F Schule für Kunst und Design hatte ich mehrere Fächer,
            darunter Grafik und Fotografie. In der Arbeit ,,CMYK - Booklet"
            lernten wir zunächst die Theorie des Druckens, Farben und Formen.
            Als wir die verschiedenen Einstellungen des Druckers verstanden
            hatten, konnten wir selbst drucken und ein cooles Booklet erstellen.
            <br/>
            <br/>
            Zunächst erstellten wir geometrische und abstrakte Formen mit
            InDesign und Illustrator. Da die Formen zu Beginn schwarz waren,
            mussten wir im InDesign mit vielen Ebenen arbeiten. Beim Druck
            konnten wir dann auf den einzelnen Ebenen entscheiden, welche Farbe
            wir den Formen geben wollten.
            <br/>
            <br/>
            Am Ende war der Druck der wichtigste
            und schwierigste Teil. Wir mussten die Einstellungen der
            Druckmaschine so anpassen, dass die CMYK-Farben in einer hohen
            Qualität gedruckt werden können.
            <br/>
            <br/>
            Wir haben alle Seiten dreimal
            gedruckt. Einmal in der Farbe Cyan, dann Magenta und schließlich
            Gelb.
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
