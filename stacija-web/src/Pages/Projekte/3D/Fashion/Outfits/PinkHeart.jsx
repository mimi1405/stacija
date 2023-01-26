import React from "react";
import FashionShowcase from "../FashionShowcase";
import One from "../../../../../assets/3d/Fashion/pinkheart/one.jpg";
import Two from "../../../../../assets/3d/Fashion/pinkheart/two.jpg";

export default function PinkHeart() {
  const data = [
    { thumbnail: Two, index: 1 },
    { thumbnail: One, index: 2 },
  ];
  const description =
    "Als ich Marvelous Designer kennenlernte und meine ersten Erfahrungen sammelte, versuchte ich, mit verschiedenen Effekten zu arbeiten. Für das ,,Pink Heart - Outfit” habe ich mit glänzenden Materialien experimentiert.";
    function renderTitle(){
      return(
        <h1 className="threed outfit-title"><span className="pink-changing">Pink</span> Heart</h1>
      )
    }
  const usedPrograms = "Marvelous Designer, Blender";
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
