import React from "react";
import data from "../data.json"; // Assuming you have a products data file
const ProductItemms = () => {
  return (
    <div className="flex items-center justify-center my-16 ">
      <div className="flex flex-col items-center w-[90%]">
        <div className="text-[26px] font-[700] leading-[32px]">
          Research Peptides For Sale
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div key={product.id} className=" p-4 hover:shadow-lg transition">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-lg font-semibold text-center">
                  {product.name}
                </h2>
                <p className="text-[#cc3882] font-bold">{product.price}</p>
                {/* <ul className="text-sm text-gray-600 mt-2">
                {product.specs.map((spec, index) => (
                  <li key={index}>• {spec}</li>
                ))}
              </ul> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItemms;
