import React, { useState, useEffect } from "react";
import "../../Styles/Shop.css";

export default function Shop({ images }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images !== undefined) {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Skelet seperations={1} />}
      <div className="image-grid-shop">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="pics-shop"
              onClick={() => getImg(image.thumbnail, image.title)}
            >
              <img
                alt="Image"
                src={image.thumbnail}
                className="thumbnail-shop"
              />
              <p>{image.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
