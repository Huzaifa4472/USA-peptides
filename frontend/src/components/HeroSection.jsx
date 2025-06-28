import React from "react";
const herobg = require("../assets/home-bg.jpeg");
const heropd = require("../assets/hero-product.webp");

const HeroSection = () => {
  return (
    <div
      className="w-full h-[70vh] flex items-start justify-center py-10 bg-cover bg-center "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="w-[80%] flex ">
        <div className="w-1/2 flex flex-col items-start justify-center gap-10 mb-8">
          <h1 className="text-gradient text-5xl font-bold">
            Highest Quality Peptides For Sale
          </h1>
          <p className="text-white text-lg leading-7 ">
            We are proud to carry the highest quality peptides and peptide
            blends in the research industry.
          </p>
          <button className="btn-gradient py-3 px-8 rounded-2xl">
            BUY PEPTIDES
          </button>
        </div>
        <div className="w-1/2">
          <img src={heropd} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
