import React from "react";
import FashionShowcase from "../FashionShowcase";
import BallkleidOne from "../../../../../assets/3d/Fashion/whitecollection/BallKleid1.png";
import BallkleidTwo from "../../../../../assets/3d/Fashion/whitecollection/BallKleid2.png";
import BallkleidkorsettOne from "../../../../../assets/3d/Fashion/whitecollection/BallKleidKorsett1.png";
import BallkleidkorsettTwo from "../../../../../assets/3d/Fashion/whitecollection/BallKleidKorsett2.png";
import BallkleidkorsettThree from "../../../../../assets/3d/Fashion/whitecollection/BallKleidKorsett3.png";
import BallOutfitOne from "../../../../../assets/3d/Fashion/whitecollection/BallOutfit01.png";
import CorsetKleid1 from "../../../../../assets/3d/Fashion/whitecollection/CorsetKleid01.png";
import FullPufferOutfit from "../../../../../assets/3d/Fashion/whitecollection/FullPufferOutfit02.png";
import KorsettOne from "../../../../../assets/3d/Fashion/whitecollection/Korsett01.png";
import KorsettTwo from "../../../../../assets/3d/Fashion/whitecollection/Korsett02.png";
import KorsettThree from "../../../../../assets/3d/Fashion/whitecollection/Korsett03.png";
import KorsettFour from "../../../../../assets/3d/Fashion/whitecollection/Korsett04.png";
import PufferJackeOne from "../../../../../assets/3d/Fashion/whitecollection/PufferJacke01.png";
import PufferJackeKapuze from "../../../../../assets/3d/Fashion/whitecollection/PufferJackeKapuze.png";
import PufferJackeOutfitOne from "../../../../../assets/3d/Fashion/whitecollection/PufferJackeOutfit01.png";
import PufferRegenJackeOne from "../../../../../assets/3d/Fashion/whitecollection/PufferRegenJacke01.png";

export default function White() {
  const data = [
    { thumbnail: BallkleidOne, index: 1 },
    { thumbnail: BallkleidTwo, index: 2 },
    { thumbnail: BallkleidkorsettOne, index: 3 },
    { thumbnail: BallkleidkorsettTwo, index: 4 },
    { thumbnail: BallkleidkorsettThree, index: 5 },
    { thumbnail: BallOutfitOne, index: 6 },
    { thumbnail: CorsetKleid1, index: 7 },
    { thumbnail: FullPufferOutfit, index: 8 },
    { thumbnail: KorsettOne, index: 9 },
    { thumbnail: KorsettTwo, index: 10 },
    { thumbnail: KorsettThree, index: 11 },
    { thumbnail: KorsettFour, index: 12 },
    { thumbnail: PufferJackeOne, index: 13 },
    { thumbnail: PufferJackeKapuze, index: 14 },
    { thumbnail: PufferJackeOutfitOne, index: 15 },
    { thumbnail: PufferRegenJackeOne, index: 16 },
  ];
  const description =
    "Mit CLO3D habe ich alle möglichen Varianten von einzelnen Kleidungsstücken entworfen. Dabei habe ich mich mit den Schnittmustern und der Zusammensetzung der einzelnen Teile beschäftigt.";
  function renderTitle() {
    return (
      <h1 className="threed outfit-title">
        White - Collection
      </h1>
    );
  }
  const usedPrograms = "CLO3D, Marvelous Designer";
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
