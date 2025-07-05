import React from "react";
const catbg = require("../assets/blend&peptide.webp");
const peptidesCat = require("../assets/peptides-cat.png");
const blendCat = require("../assets/blend-cat.png");

const PeptidesCat = () => {
  return (
    <div
      className="w-full flex items-center justify-center py-10 bg-cover bg-center "
      style={{ backgroundImage: `url(${catbg})` }}
    >
      <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-16 lg:py-4 py-10 justify-between w-[60%] ">
        <div className="flex flex-col items-center gap-4">
          <img src={peptidesCat} className="h-56 rounded-b-[2000px] " />
          <button className="text-[#9E6A2B] font-medium sm:text-lg text-[15px] border-2 border-[#9E6A2B] px-4 py-2 rounded-2xl hover:bg-[#9E6A2B] hover:text-white transition-all duration-500 ease-in-out">
            PEPTIDES
          </button>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <img src={blendCat} className="h-56 rounded-b-[2000px] " />
          <button className="text-[#D14D90] font-medium sm:text-lg text-[15px] border-2 border-[#D14D90] px-4 py-2 rounded-2xl hover:bg-[#D14D90] hover:text-white transition-all duration-500 ease-in-out">
            PEPTIDE BLENDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeptidesCat;
