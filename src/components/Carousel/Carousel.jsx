import React from "react";

export default function Carousel({ carouselData }) {
  return (
    <div id="carousel">
      {carouselData?.map((comic, index) => {
        return (
          <div className="item" key={index}>
            <img src={comic?.image} alt={comic?.name} /> <p>{comic?.name}</p>
          </div>
        );
      })}
    </div>
  );
}
