import React from 'react'
import Gallerie from '../../../../../assets/Graphics/AnalogPics/Gallerie.jpg'
import Gebaeude from '../../../../../assets/Graphics/AnalogPics/Gebaeude.jpg'
import Kopfhoerer from '../../../../../assets/Graphics/AnalogPics/Kopfhoerer.jpg'
import Kristall from '../../../../../assets/Graphics/AnalogPics/Kristall.jpg'
import Schallplatten from '../../../../../assets/Graphics/AnalogPics/Schallplaten.jpg'
import Schluessel from '../../../../../assets/Graphics/AnalogPics/Schluessel.jpg'
import Footer from '../../../../../components/Footer'
import ImageGallery from '../../../../../components/Gallery/ImageGallery'
import '../../../../../Styles/AnalogPictures.css'


export default function AnalogPictures() {

  const data = [
    { thumbnail: Gallerie, index: 1 },
    { thumbnail: Gebaeude, index: 2 },
    { thumbnail: Kopfhoerer, index: 3 },
    { thumbnail: Kristall, index: 4 },
    { thumbnail: Schallplatten, index: 5 },
    { thumbnail: Schluessel, index: 6 },
  ]

  return (
    <>
      <section className="analog-introduction">
        <div>
          <h1 className="twodtitle">Analog Bilder</h1>
          <p className="analog-description">
          Im Fach Fotografie haben wir uns eine Woche lang mit analoger Fotografie beschäftigt. 
          Wir haben uns Bilder angesehen, die vor fast hundert Jahren aufgenommen wurden. In dieser 
          Woche habe ich eine Lochkamera aus Pappe, Plastik, Klebeband, Fotopapier und Folie gebastelt. 
          In Zweiergruppen haben wir spannende Bilder gemacht, die wir mit einer Lochkamera entwickelt haben.
          In einer Dunkelkammer füllten wir einen Plastikbehälter mit Entwicklerlösung, einen anderen mit Wasser und den dritten 
          mit Fixiermittel. Dann nahmen wir das Fotopapier aus der Kamera und tauchten es in den ersten Behälter. Nach ein paar Minuten 
          begann das Bild zu erscheinen. Dann haben wir es für eine Zeit in Wasser gelegt und abgespült. Nach dem Abspülen haben wir es in das Fixiermittel gelegt. Wir lassen es fünf Minuten einwirken und hielten es dann 15 Minuten lang unter fließendes Wasser, um das Fixiermittel abzuspülen.
          </p>
        </div>
      </section>
      <section className="images">
        <ImageGallery images={data} />
      </section>
      <Footer />
    </>
  )
}
