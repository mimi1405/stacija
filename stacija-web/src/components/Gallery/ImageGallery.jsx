import React, { useState } from "react";
import "../../Styles/ImageGallery.css";
import { AiOutlineClose } from "react-icons/ai";

export default function ImageGallery({ images }) {

  const [selectedImage, setSelectedImage] = useState();
  const [modal, setModal] = useState(false);

  function getImg(image){
    setSelectedImage(image);
    setModal(true);
  }

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={selectedImage} alt="Image Zoomed" />
        <AiOutlineClose onClick={() => setModal(false)} className="closeModal" size={40} />
      </div>
      <div className="image-grid">
        {images.map((image, index) => {
          return (
            <div key={index} className="pics" onClick={() => getImg(image.thumbnail)}>
              <img
                alt="Image"
                src={image.thumbnail}
                className="thumbnail"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
