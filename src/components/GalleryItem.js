import React from "react";

function GalleryItem({ image, name }) {
  return (
    <div className="galleryItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
  );
}

export default GalleryItem;
