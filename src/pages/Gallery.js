import React from "react";
import { GalleryList } from "../helpers/GalleryList";
import GalleryItem from "../components/GalleryItem";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1 className="galleryTitle">Gallerij</h1>
      <div className="galleryList">
        {GalleryList.map((foto, key) => {
          return (
            <div>
              <GalleryItem key={key} image={foto.image} name={foto.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
