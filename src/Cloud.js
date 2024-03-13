// Clouds.js
import React from "react";

const Clouds = () => {
  return (
    <div className="clouds-container">
      <div
        className="cloud cloud1"
        style={{ backgroundImage: "url(./img/xloud2.webp)" }}
      ></div>
      <div
        className="cloud cloud2"
        style={{ backgroundImage: "url(./img/xloud5.webp)" }}
      ></div>
      <div
        className="cloud cloud3"
        style={{ backgroundImage: "url(./img/xloud4.webp)" }}
      ></div>
      <div
        className="cloud cloud4"
        style={{ backgroundImage: "url(./img/xloud3.webp)" }}
      ></div>
    </div>
  );
};

export default Clouds;
