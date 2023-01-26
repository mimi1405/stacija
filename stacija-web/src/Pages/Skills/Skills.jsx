import React from "react";
import Skill from "./Skill";
import { SiAdobephotoshop } from "react-icons/si";
import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { BsFillBrushFill } from "react-icons/bs";
import { FaBlender } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { SiAdobeindesign } from "react-icons/si";

import Footer from "../../components/Footer";
import MarvelousDesigner from "./MarvelousDesigner";

export default function Skills() {
  return (
    <>
      <section className="entry-skills">
        <h1>SKILLS</h1>
      </section>
      <section className="skills-display">
        <Skill
          link="https://www.adobe.com/de/products/photoshop/landpb.html?gclid=CjwKCAiA5sieBhBnEiwAR9oh2p2WF9gTkVgWq99el9t0YcUEFPBIuDQ-12t-heV08IKBgK4b4iwYuBoCUSAQAvD_BwE&mv=search&s_kwcid=AL!3085!3!341205896389!e!!g!!photoshop!1419109629!54636022246&mv=search&sdid=LZ32SYVR&ef_id=CjwKCAiA5sieBhBnEiwAR9oh2p2WF9gTkVgWq99el9t0YcUEFPBIuDQ-12t-heV08IKBgK4b4iwYuBoCUSAQAvD_BwE:G:s&s_kwcid=AL!3085!3!341205896389!e!!g!!photoshop!1419109629!54636022246"
          skill="Photoshop"
          icon={<SiAdobephotoshop size={80} />}
        />
        <Skill
          link="https://www.microsoft.com/de-ch/microsoft-365/word"
          skill="Word"
          icon={<SiMicrosoftword size={80} />}
        />
        <Skill
          link="https://www.microsoft.com/en-us/microsoft-365/excel"
          skill="Excel"
          icon={<SiMicrosoftexcel size={80} />}
        />
        <Skill
          link="https://www.adobe.com/de/products/illustrator.html?gclid=CjwKCAiA5sieBhBnEiwAR9oh2vRQsBubpfiKKNX3PFbgUL-zL30LU_pAMFaHhkQoU5-ViGGckwDAtBoC230QAvD_BwE&mv=search&s_kwcid=AL!3085!3!599955190795!e!!g!!illustrator!1425872103!56040776396&mv=search&sdid=KCJMVLF6&ef_id=CjwKCAiA5sieBhBnEiwAR9oh2vRQsBubpfiKKNX3PFbgUL-zL30LU_pAMFaHhkQoU5-ViGGckwDAtBoC230QAvD_BwE:G:s&s_kwcid=AL!3085!3!599955190795!e!!g!!illustrator!1425872103!56040776396"
          skill="Illustrator"
          icon={<SiAdobeillustrator size={80} />}
        />
        <Skill
          link="https://www.blender.org/"
          skill="Blender"
          icon={<FaBlender size={80} />}
        />
        <Skill
          link="https://www.stacija-art.com"
          skill="Drawing and Painting"
          icon={<BsFillBrushFill size={80} />}
        />
        <Skill
          link="https://www.clo3d.com/en/"
          skill="CLO3D"
          icon={<GiClothes size={80} />}
        />
        <Skill
          link="https://www.adobe.com/ch_de/products/indesign/landpb.html?gclid=CjwKCAiA5sieBhBnEiwAR9oh2qkEv4006-x2UUPaPU2naIZcFa7lCO43D9zgWXTDv19kSWlKIFaHkhoCMcgQAvD_BwE&mv=search&sdid=LCDWTLJX&ef_id=CjwKCAiA5sieBhBnEiwAR9oh2qkEv4006-x2UUPaPU2naIZcFa7lCO43D9zgWXTDv19kSWlKIFaHkhoCMcgQAvD_BwE:G:s&s_kwcid=AL!3085!3!341214290299!e!!g!!indesign!1427752231!61524476332"
          skill="InDesign"
          icon={<SiAdobeindesign size={80} />}
        />
        <Skill
          link="https://www.marvelousdesigner.com/"
          skill="Marvelous Designer"
          icon={<MarvelousDesigner />}
        />
      </section>
      <Footer />
    </>
  );
}
