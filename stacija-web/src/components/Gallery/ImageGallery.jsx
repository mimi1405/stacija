import React, { useState, useEffect } from "react";
import "../../Styles/ImageGallery.css";
import { AiOutlineClose } from "react-icons/ai";
import Skelet from "../SkeletonLoader/Skelet";

export default function ImageGallery({ images }) {

  const [selectedImage, setSelectedImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);

  function getImg(image){
    setSelectedImage(image);
    setModal(true);
  }

  useEffect(() => {
    if(images !== undefined){
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={selectedImage} alt="Image Zoomed" />
        <AiOutlineClose onClick={() => setModal(false)} className="closeModal" size={40} />
      </div>
      <div className="image-grid">
        {images.map((image, index) => {
          return (
            <>
              {isLoading && <Skelet seperations={1} />}
              <div key={index} className="pics" onClick={() => getImg(image.thumbnail)}>
              <img
                alt="Image"
                src={image.thumbnail}
                className="thumbnail"
              />
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}
