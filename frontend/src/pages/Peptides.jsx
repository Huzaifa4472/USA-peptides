import React from "react";
const herobg = require("../assets/peptides-bg.jpg");
const heropd = require("../assets/hero-product.webp");
const Peptides = () => {
  return (
    <div
      className="w-full lg:h-[70vh] flex items-start justify-center py-10 bg-cover bg-center "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="md:w-[80%] w-[90%]  flex gap-8 lg:flex-row flex-col">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-10 ">
          <h1 className="text-gradient md:text-[60px] text-[40px] leading-tight font-[700]">
            Research Peptides For Sale
          </h1>
        </div>
        <div className="lg:w-1/2">
          <img src={heropd} />
        </div>
      </div>
    </div>
  );
};

export default Peptides;
