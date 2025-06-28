import React from "react";
const herobg = require("../assets/peptides-bg.jpg");
const heropd = require("../assets/hero-product.webp");
const Peptides = () => {
  return (
    <div
      className="w-full h-[70vh] flex items-start justify-center py-10 bg-cover bg-center "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="w-[80%] flex ">
        <div className="w-1/2 flex flex-col items-start justify-center gap-10 ">
          <h1 className="text-gradient text-7xl font-bold">
            Research Peptides For Sale
          </h1>
        </div>
        <div className="w-1/2">
          <img src={heropd} />
        </div>
      </div>
    </div>
  );
};

export default Peptides;
