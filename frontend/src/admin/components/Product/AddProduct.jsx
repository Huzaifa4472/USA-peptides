import React, { useState } from "react";

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [freeShippingCondition, setFreeShippingCondition] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    size: "",
    contents: "",
    form: "",
    purity: "",
    sku: "",
    quantity: 1,
  });

  const [salesOffers, setSalesOffers] = useState([]);
  const [offerInput, setOfferInput] = useState({
    minQty: "",
    maxQty: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      freeShipping: isFreeShipping,
      freeShippingCondition,
      productImage,
      salesOffers,
    });
  };

  const addOffer = () => {
    if (!offerInput.minQty || !offerInput.maxQty || !offerInput.discount)
      return;
    const pricePerUnit = parseFloat(formData.price) || 0;
    const qty = parseInt(offerInput.minQty);
    const totalPrice = pricePerUnit * qty;
    const discountedPrice =
      totalPrice - totalPrice * (parseFloat(offerInput.discount) / 100);

    setSalesOffers([
      ...salesOffers,
      {
        qtyRange: `${offerInput.minQty} - ${offerInput.maxQty}`,
        discount: `${offerInput.discount}%`,
        finalPrice: `$${discountedPrice.toFixed(2)}`,
      },
    ]);

    setOfferInput({ minQty: "", maxQty: "", discount: "" });
  };

  return (
    <div className="p-6 text-gray-700">
      <h2 className="text-2xl font-bold  mb-6 ">Add New Product</h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab(1)}
          className={`px-6 py-2 font-medium ${
            activeTab === 1
              ? "border-b-2 border-primary text-primary"
              : "text-secondary"
          }`}
        >
          Product Info
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`px-6 py-2 font-medium ${
            activeTab === 2
              ? "border-b-2 border-primary text-primary"
              : "text-secondary"
          }`}
        >
          Sales & Offers
        </button>
      </div>

      {/* Tab 1: Product Info */}
      {activeTab === 1 && (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Image Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 border-2 border-dashed border-primary rounded-full flex items-center justify-center overflow-hidden">
              {productImage ? (
                <img
                  src={productImage}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-secondary text-sm">No Image</span>
              )}
            </div>
            <label className="mt-3 bg-secondary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-secondary/90">
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Fields in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-secondary font-medium mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                Size
              </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="Enter size"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                Contents
              </label>
              <input
                type="text"
                name="contents"
                value={formData.contents}
                onChange={handleChange}
                placeholder="Enter product contents"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              ></input>
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                Form
              </label>
              <input
                type="text"
                name="form"
                value={formData.form}
                onChange={handleChange}
                placeholder="Enter product form"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                Purity
              </label>
              <input
                type="text"
                name="purity"
                value={formData.purity}
                onChange={handleChange}
                placeholder="Enter purity"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                SKU
              </label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="Enter SKU"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-secondary font-medium mb-1">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isFreeShipping}
              onChange={(e) => setIsFreeShipping(e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded accent-secondary"
            />
            <label className="ml-2 text-secondary font-medium">
              Free Shipping
            </label>
          </div>

          {isFreeShipping && (
            <div>
              <label className="block text-secondary font-medium mb-1">
                Free Shipping Condition
              </label>
              <input
                type="text"
                value={freeShippingCondition}
                onChange={(e) => setFreeShippingCondition(e.target.value)}
                placeholder="e.g. On orders above $100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-secondary text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
            onClick={() => setActiveTab(2)}
          >
            Next
          </button>
        </form>
      )}
      {activeTab === 2 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="number"
              placeholder="Min Qty"
              value={offerInput.minQty}
              onChange={(e) =>
                setOfferInput({ ...offerInput, minQty: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
            />
            <input
              type="number"
              placeholder="Max Qty"
              value={offerInput.maxQty}
              onChange={(e) =>
                setOfferInput({ ...offerInput, maxQty: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
            />
            <input
              type="number"
              placeholder="Discount %"
              value={offerInput.discount}
              onChange={(e) =>
                setOfferInput({ ...offerInput, discount: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
            />
          </div>

          <button
            onClick={addOffer}
            className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90 mb-4"
          >
            Add Offer
          </button>

          {/* Offers Table */}
          {salesOffers.length > 0 && (
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-2 border">Quantity Range</th>
                  <th className="p-2 border">Discount</th>
                  <th className="p-2 border">Price After Discount</th>
                </tr>
              </thead>
              <tbody>
                {salesOffers.map((offer, index) => (
                  <tr key={index} className="border">
                    <td className="p-2 border">{offer.qtyRange}</td>
                    <td className="p-2 border">{offer.discount}</td>
                    <td className="p-2 border">{offer.finalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
