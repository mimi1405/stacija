import { useState } from "react";
import React from "react";
import Switch from "react-switch";
import "..//../../../Styles/Outfit.css";
import "../../../../Styles/Projekte.scss";
import ImageGallery from "../../../../components/Gallery/ImageGallery";
import Carousel from "../../../../components/Carousel/Carousel";
import Footer from "../../../../components/Footer";
import { BiCarousel } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";

export default function FashionShowcase(props) {
  const [GalleryState, setGalleryState] = useState(false);

  const data = props.data;
  const galleryData = data;
  let carouselData = [];

  for (let i = 0; i < galleryData.length; i++) {
    carouselData.push([galleryData[i].thumbnail]);
  }

  function handleSwitch() {
    setGalleryState(!GalleryState);
  }

  return (
    <>
      <section id="outfit-container">
        {props.title}
        <p className="outfit-description">{props.description}</p>
      </section>
      <section id="outfit-container">
        <div className="outfit-switch-container">
          <Switch
            handleDiameter={40}
            height={70}
            width={120}
            offColor="#000000"
            onColor="#000000"
            offHandleColor="#000000"
            onHandleColor="#ffffff"
            borderRadius={6}
            activeBoxShadow="0px 0px 12px 1px #e349cc"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: "1.5rem",
                  paddingLeft: 45,
                }}
              >
                Karussel
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingRight: "35px",
                  fontSize: "1.5rem",
                }}
              >
                Galerie
              </div>
            }
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20,
                }}
              >
                <BiCarousel size={35} />
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <GrGallery fill="white" size={35} />
              </div>
            }
            checked={GalleryState}
            onChange={handleSwitch}
          />
          {/* <p className="setting-description">
            {GalleryState ? "Gallerie-Ansicht" : "Karussel-Ansicht"}
          </p> */}
        </div>
        {GalleryState ? (
          <ImageGallery images={galleryData} />
        ) : (
          <Carousel Data={carouselData} />
        )}
        <div className="usedPrograms-wrapper">
          <p className="usedProgram">Benutzte Software: {props.usedPrograms}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
