import React from "react";
const PeptidesHomeBg = require("../assets/home-peptides.webp");

const PeptidesHome = () => {
  return (
    <div className="relative w-full my-20">
      <img
        src={PeptidesHomeBg}
        className="w-full object-cover"
        alt="Background"
      />

      <div className="absolute top-0 left-0 w-[100%] flex items-center justify-center  my-10">
        <div className="w-[90%] flex ">
          <div className="w-1/2  p-4 flex flex-col justify-center gap-72 h-[90vh] ">
            <div className="text-5xl font-bold text-center text-[#333333] leading-tight w-[80%] bg-white">
              Highest Quality Peptides For Sale
            </div>
            <p className="text-lg leading-7 mt-10 text-[#666]  bg-white">
              Welcome to Core Peptides. We are proud to carry the highest
              quality peptides and peptide blends in the research industry. All
              of our peptides have gone through rigorous quality control
              procedures to ensure our clients are receiving the best quality
              peptides available. We offer custom peptides for sale online.
            </p>
          </div>
          <div className="w-1/2  p-4 flex flex-col justify-end items-end">
            <button className="text-2xl font-medium bg-gradient py-5 px-10  mr-6 rounded-full btn-gradient ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeptidesHome;
