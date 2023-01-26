import React from "react";
import FashionShowcase from "../FashionShowcase";
import Front from "../../../../../assets/3d/Fashion/cursedeyes/redfront.jpg";
import Back from "../../../../../assets/3d/Fashion/cursedeyes/redback.jpg";

export default function CursedEyes() {
  const data = [
    { thumbnail: Front, index: 1 },
    { thumbnail: Back, index: 2 },
  ];
  const description =
    "Für Outfits wie dieses brauche ich mehr Zeit. Die Details und die Farben können einen großen Einfluss auf die Kleidung haben. Außerdem habe ich für diesen Look eine Gürteltasche entworfen. Sie gefällt mir sehr gut, weil die Farben gut zusammenpassen.";
    function renderTitle(){
      return(
        <h1 className="threed-blood blood outfit-title">Cursed Eyes</h1>
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
