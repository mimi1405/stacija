import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import UeberMich from "./Pages/UeberMich";
import Projekte from "./Pages/Projekte/Projekte";
import Kontakt from "./Pages/Kontakt";
import { Routes, Route } from "react-router";
import ThreeD from "./Pages/Projekte/3D/ThreeD";
import TwoD from "./Pages/Projekte/2D/TwoD";
import Fashion from "./Pages/Projekte/Fashion/Fashion";
import SAQU from "./Pages/Projekte/Fashion/Jackets/SAQU/SAQU";
import Jackets from "./Pages/Projekte/Fashion/Jackets/Jackets";
import Paintings from "./Pages/Projekte/2D/Drawings/Paintings";
import Sketches from "./Pages/Projekte/2D/Drawings/Sketches";
import Graphics from "./Pages/Projekte/2D/Graphics/Graphics";
import AnalogPictures from "./Pages/Projekte/2D/Graphics/AnalogPictures/AnalogPictures";
import Booklet from "./Pages/Projekte/2D/Graphics/CMYK/Booklet";
import GoFarComeClose from "./Pages/Projekte/2D/Graphics/GoFarComeClose/GoFarComeClose";
import Cards from "./Pages/Projekte/2D/Graphics/Cards/Cards";
import Render from "./Pages/Projekte/3D/Render/Render";
import Animations from "./Pages/Projekte/3D/Animation/Animations";
import LightBalls from "./Pages/Projekte/3D/Animation/LightBalls";
import PinkCubes from "./Pages/Projekte/3D/Animation/PinkCubes";
import SilverMelting from "./Pages/Projekte/3D/Animation/SilverMelting";
import Slime from "./Pages/Projekte/3D/Animation/Slime";
import Explosion from "./Pages/Projekte/3D/Animation/Explosion";
import Shop from "./Pages/Store/Shop";
import ThreeDFashion from "./Pages/Projekte/3D/Fashion/ThreeDFashion";
import Collabs from "./Pages/Projekte/3D/Fashion/Collabs/Collabs";
import Outfits from "./Pages/Projekte/3D/Fashion/Outfits/Outfits";
import Lookbooks from "./Pages/Projekte/3D/Fashion/Lookbooks/Lookbooks";
import CafeLate from "./Pages/Projekte/3D/Fashion/Outfits/CafeLate";
import CursedEyes from "./Pages/Projekte/3D/Fashion/Outfits/CursedEyes";
import PinkHeart from "./Pages/Projekte/3D/Fashion/Outfits/PinkHeart";
import DrawingRouter from "./Pages/Projekte/2D/Drawings/DrawingRouter";
import Skills from "./Pages/Skills/Skills";
import White from "./Pages/Projekte/3D/Fashion/Outfits/White";
import Failure from "./Pages/Failure";

function App() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<UeberMich />} />
        <Route path="/projekte" element={<Projekte />} />

        <Route path="/projekte/3d" element={<ThreeD />} />
        <Route path="/projekte/3d/render" element={<Render />} />
        <Route path="/projekte/3d/animation" element={<Animations />} />
        <Route
          path="/projekte/3d/animation/light-balls"
          element={<LightBalls />}
        />
        <Route
          path="/projekte/3d/animation/pink-cubes"
          element={<PinkCubes />}
        />
        <Route
          path="/projekte/3d/animation/silver-melting"
          element={<SilverMelting />}
        />
        <Route path="/projekte/3d/animation/slime" element={<Slime />} />
        <Route
          path="/projekte/3d/animation/explosion"
          element={<Explosion />}
        />

        <Route path="/projekte/3d/fashion" element={<ThreeDFashion />} />
        <Route path="/projekte/3d/fashion/collabs" element={<Collabs />} />

        <Route path="/projekte/3d/fashion/outfits" element={<Outfits />} />
        <Route path="/projekte/3d/fashion/outfits/pink-hearts" element={<PinkHeart/>} />
        <Route path="/projekte/3d/fashion/outfits/cursed-eyes" element={<CursedEyes/>} />
        <Route path="/projekte/3d/fashion/outfits/cafè-latte" element={<CafeLate/>} />
        <Route path="/projekte/3d/fashion/outfits/white-collection" element={<White/>} />



        <Route path="/projekte/3d/fashion/lookbooks" element={<Lookbooks />} />

        <Route path="/projekte/2d" element={<TwoD />} />

        <Route path="/projekte/2d/drawings" element={<DrawingRouter />} />
        <Route path="/projekte/2d/drawings/paintings" element={<Paintings />} />
        <Route path="/projekte/2d/drawings/sketches" element={<Sketches />} />

        <Route path="/projekte/2d/graphics" element={<Graphics />} />
        <Route
          path="/projekte/2d/graphics/analog-pictures"
          element={<AnalogPictures />}
        />
        <Route
          path="/projekte/2d/graphics/cmyk-booklet"
          element={<Booklet />}
        />
        <Route
          path="/projekte/2d/graphics/go-far-come-close"
          element={<GoFarComeClose />}
        />
        <Route
          path="/projekte/2d/graphics/business-cards"
          element={<Cards />}
        />

        <Route path="/projekte/fashion" element={<Fashion />} />
        <Route path="/projekte/fashion/jackets" element={<Jackets />} />
        <Route path="/projekte/fashion/jackets/saqu" element={<SAQU />} />

        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/skills" element={<Skills/>} />

        <Route path="/404" element={<Failure/>} />
      </Routes>
    </div>
  );
}

export default App;
