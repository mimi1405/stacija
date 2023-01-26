import React from "react";
import "../../../../../Styles/Outfit-Animations.scss";
import "../../../../../Styles/Outfit.css";
import Collab from "../../../../../assets/3d/Fashion/Collab/Collab.jpg";
import FashionShowcase from "../FashionShowcase";

export default function Collabs() {
  const data = [{ thumbnail: Collab, index: 1 }];
  const description =
    "Ein Freund und ich haben zusammen einen Beitrag für Instagram gemacht. Für dieses Bild haben wir Kleidung verwendet, die ich entworfen habe, und seinen selbstgemachten Hintergrund. Ich denke, das Endergebnis ist perfekt. Es hat sehr viel Spaß gemacht, mit ihm zu arbeiten.";
  function renderTitle() {
    return <h1 className="threed threedSize threedTextFashion">Collab</h1>;
  }
  const usedPrograms = "CLO3D, Blender, DAZ3D, Photoshop";
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
