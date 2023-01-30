import React, { useState } from "react";
import "../../Styles/Shop.css";
import { AiOutlineClose } from "react-icons/ai";
import ArtRender from './ArtRender'


export default function ShopGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageTitle, setSelectedImageTitle] = useState("");
  const [modal, setModal] = useState(false);
  const [buy, setBuy] = useState("");


  function getImg(image, title) {
    setSelectedImage(image);
    setSelectedImageTitle(title);
    setModal(true);
    setBuy(
      "mailto:anastasija.lukic@mail.ch?subject=" +
        title +
        "&body=Dear Stacy, I would like to buy this art!"
    );
  }

  return (
    <>
      <div className={modal ? "modal open-shop" : "modal"}>
        <img src={selectedImage} alt="Image Zoomed" />
        <p>{selectedImageTitle}</p>
        <button className="modal-buy-button">
          <a href={buy}>Buy</a>
        </button>
        <AiOutlineClose
          onClick={() => setModal(false)}
          className="closeModal"
          size={40}
        />
      </div>
      {images.length != 0 ? (
        <ArtRender images={images} />
      ) : (
        <>
          <p className="noshoptext">
            There is currently no art to sell.
            <br />
            <br />
            Try to come back later.
          </p>
        </>
      )}
    </>
  );
}
