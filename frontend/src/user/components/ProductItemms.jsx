import React, { useState } from "react";
import data from "../../data.json"; // Assuming you have a products data file
const ProductItemms = () => {
  const [sortOption, setSortOption] = useState("Sort by popularity");
  const [products, setProducts] = useState([...data]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...data];

    switch (value) {
      // case "Sort by latest":
      //   sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
      //   break;
      case "Sort by price: low to high":
        sortedProducts.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[^0-9.]/g, "")) -
            parseFloat(b.price.replace(/[^0-9.]/g, ""))
        );
        break;
      case "Sort by price: high to low":
        sortedProducts.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[^0-9.]/g, "")) -
            parseFloat(a.price.replace(/[^0-9.]/g, ""))
        );
        break;
      case "Sort by title: (A-Z)":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Sort by title: (Z-A)":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts = [...data];
    }

    setProducts(sortedProducts);
  };
  return (
    <div className="flex items-center justify-center my-16 ">
      <div className="flex flex-col items-center w-[90%]">
        <div className="text-[26px] font-[700] leading-[32px]">
          Research Peptides For Sale
        </div>
        <div className="flex items-center justify-between w-[80%] p-2 my-8">
          <p className="font-[600] text-[14px] leading-[26px]">
            Showing all {data.length} result
          </p>
          <select
            className="border p-2 rounded-md"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option>Sort by popularity</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
            <option>Sort by title: (A-Z)</option>
            <option>Sort by title: (Z-A)</option>
          </select>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[80%] gap-6">
          {products.map((product) => (
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItemms;
