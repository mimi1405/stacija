import React from "react";
import FashionShowcase from "../FashionShowcase";
import Front from "../../../../../assets/3d/Fashion/CaffeLatte/Front.jpg";
import Side from "../../../../../assets/3d/Fashion/CaffeLatte/Back.jpg";
import Back from "../../../../../assets/3d/Fashion/CaffeLatte/Side.jpg";
import '../../../../../Styles/Outfit-Animations.scss'
import '../../../../../Styles/Outfit.css'




export default function CafeLate() {
  const data = [
    { thumbnail: Front, index: 1 },
    { thumbnail: Side, index: 2 },
    { thumbnail: Back, index: 3 },
  ];
  const description =
    "Meine Inspiration für die Farben war Kaffee. Für die Muster verwende ich ein Werkzeug in CLO3D, welches auch bei InDesign verfügbar ist.";
  function renderTitle(){
    return(
      <h1 className="threed-coffe outfit-title">Cafè Latte</h1>
    )
  }
  const usedPrograms = "CLO3D, Blender";
  return (
    <>
      <FashionShowcase
        usedPrograms={usedPrograms}
        description={description}
        data={data}
        title={renderTitle()}
      />
    </>
  );
}
