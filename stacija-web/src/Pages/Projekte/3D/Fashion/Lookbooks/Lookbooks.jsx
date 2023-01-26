import React from "react";
import "../../../../../Styles/Projekte.scss";
import FashionShowcase from "../FashionShowcase";
import One from "../../../../../assets/3d/Fashion/lookbook/one.png";
import Two from "../../../../../assets/3d/Fashion/lookbook/two.jpeg";
import Three from "../../../../../assets/3d/Fashion/lookbook/three.png";
import Four from "../../../../../assets/3d/Fashion/lookbook/four.png";
import Five from "../../../../../assets/3d/Fashion/lookbook/five.jpg";
import Six from "../../../../../assets/3d/Fashion/lookbook/six.png";
import Seven from "../../../../../assets/3d/Fashion/lookbook/seven.jpg";

export default function Lookbooks() {
  const data = [
    { thumbnail: One, index: 1 },
    { thumbnail: Two, index: 2 },
    { thumbnail: Three, index: 3 },
    { thumbnail: Four, index: 4 },
    { thumbnail: Five, index: 5 },
    { thumbnail: Six, index: 6 },
    { thumbnail: Seven, index: 7 },
  ];
  const description =
    "Wie der Titel schon sagt, habe ich mein eigenes LookBook entworfen. Die Idee dahinter war, meine Fähigkeiten im Bereich 3D - Mode zu erweitern und verschiedene Stile auszuprobieren.";
  const title = "Lookbook";
  const usedPrograms = "CLO3D, Blender, Photoshop";
  return (
    <>
      <FashionShowcase
        usedPrograms={usedPrograms}
        description={description}
        data={data}
        title={title}
      />
    </>
  );
}
