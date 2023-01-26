import React from 'react'
import One from '../../../../../assets/gofarcomeclose/GFCC1.png'
import Two from '../../../../../assets/gofarcomeclose/GFCC2.png'
import Three from '../../../../../assets/gofarcomeclose/GFCC3.png'
import Four from '../../../../../assets/gofarcomeclose/GFCC4.png'
import Five from '../../../../../assets/gofarcomeclose/GFCC5.png'
import Six from '../../../../../assets/gofarcomeclose/GFCC6.png'
import Seven from '../../../../../assets/gofarcomeclose/GFCC7.png'
import Eight from '../../../../../assets/gofarcomeclose/GFCC8.png'

import Footer from '../../../../../components/Footer'
import ImageGallery from '../../../../../components/Gallery/ImageGallery'
import '../../../../../Styles/AnalogPictures.css'
import '../../../../../Styles/Graphics.css'


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
  ]
  return (
    <>
    <section className="analog-introduction">
      <div>
        <h1 className="twodtitle gfccmain">Go  Far Come    Close</h1>
        <p className="analog-description">
        An der F+F Schule für Kunst und Design hatte ich mehrere Fächer, 
        darunter Grafik und Fotografie. In der Arbeit ,,CMYK - Booklet" lernten wir 
        zunächst die Theorie des Druckens, Farben und Formen. Als wir die verschiedenen 
        Einstellungen des Druckers verstanden hatten, konnten wir selbst drucken und ein 
        cooles Booklet erstellen.
        Zunächst erstellten wir geometrische und abstrakte Formen mit InDesign und Illustrator. 
        Da die Formen zu Beginn schwarz waren, mussten wir im InDesign mit vielen Ebenen arbeiten. 
        Beim Druck konnten wir dann auf den einzelnen Ebenen entscheiden, welche Farbe wir den Formen 
        geben wollten.
        Am Ende war der Druck der wichtigste und schwierigste Teil. Wir mussten die Einstellungen der 
        Druckmaschine so anpassen, dass die CMYK-Farben in einer hohen Qualität gedruckt werden können. 
        Wir haben alle Seiten dreimal gedruckt. Einmal in der Farbe Cyan, dann Magenta und schließlich Gelb.
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
