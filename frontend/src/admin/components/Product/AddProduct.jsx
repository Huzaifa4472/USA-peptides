// import React, { useState } from "react";

// const AddProduct = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   const [isFreeShipping, setIsFreeShipping] = useState(false);
//   const [freeShippingCondition, setFreeShippingCondition] = useState("");
//   const [productImage, setProductImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     size: "",
//     contents: "",
//     form: "",
//     purity: "",
//     sku: "",
//     quantity: 1,
//   });

//   const [salesOffers, setSalesOffers] = useState([]);
//   const [offerInput, setOfferInput] = useState({
//     minQty: "",
//     maxQty: "",
//     discount: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProductImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       ...formData,
//       freeShipping: isFreeShipping,
//       freeShippingCondition,
//       productImage,
//       salesOffers,
//     });
//   };

//   const addOffer = () => {
//     if (!offerInput.minQty || !offerInput.maxQty || !offerInput.discount)
//       return;
//     const pricePerUnit = parseFloat(formData.price) || 0;
//     const qty = parseInt(offerInput.minQty);
//     const totalPrice = pricePerUnit * qty;
//     const discountedPrice =
//       totalPrice - totalPrice * (parseFloat(offerInput.discount) / 100);

//     setSalesOffers([
//       ...salesOffers,
//       {
//         qtyRange: `${offerInput.minQty} - ${offerInput.maxQty}`,
//         discount: `${offerInput.discount}%`,
//         finalPrice: `$${discountedPrice.toFixed(2)}`,
//       },
//     ]);

//     setOfferInput({ minQty: "", maxQty: "", discount: "" });
//   };

//   return (
//     <div className="p-6 text-gray-700">
//       <h2 className="text-2xl font-bold  mb-6 ">Add New Product</h2>

//       {/* Tabs */}
//       <div className="flex border-b border-gray-300 mb-6">
//         <button
//           onClick={() => setActiveTab(1)}
//           className={`px-6 py-2 font-medium ${
//             activeTab === 1
//               ? "border-b-2 border-primary text-primary"
//               : "text-secondary"
//           }`}
//         >
//           Product Info
//         </button>
//         <button
//           onClick={() => setActiveTab(2)}
//           className={`px-6 py-2 font-medium ${
//             activeTab === 2
//               ? "border-b-2 border-primary text-primary"
//               : "text-secondary"
//           }`}
//         >
//           Sales & Offers
//         </button>
//       </div>

//       {/* Tab 1: Product Info */}
//       {activeTab === 1 && (
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Product Image Upload */}
//           <div className="flex flex-col items-center mb-6">
//             <div className="w-32 h-32 border-2 border-dashed border-primary rounded-full flex items-center justify-center overflow-hidden">
//               {productImage ? (
//                 <img
//                   src={productImage}
//                   alt="Preview"
//                   className="object-cover w-full h-full"
//                 />
//               ) : (
//                 <span className="text-secondary text-sm">No Image</span>
//               )}
//             </div>
//             <label className="mt-3 bg-secondary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-secondary/90">
//               Upload Image
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>

//           {/* Fields in grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter product name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Price ($)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Enter price"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Size
//               </label>
//               <input
//                 type="text"
//                 name="size"
//                 value={formData.size}
//                 onChange={handleChange}
//                 placeholder="Enter size"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               />
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Contents
//               </label>
//               <input
//                 type="text"
//                 name="contents"
//                 value={formData.contents}
//                 onChange={handleChange}
//                 placeholder="Enter product contents"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               ></input>
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Form
//               </label>
//               <input
//                 type="text"
//                 name="form"
//                 value={formData.form}
//                 onChange={handleChange}
//                 placeholder="Enter product form"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               />
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Purity
//               </label>
//               <input
//                 type="text"
//                 name="purity"
//                 value={formData.purity}
//                 onChange={handleChange}
//                 placeholder="Enter purity"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               />
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 SKU
//               </label>
//               <input
//                 type="text"
//                 name="sku"
//                 value={formData.sku}
//                 onChange={handleChange}
//                 placeholder="Enter SKU"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               />
//             </div>
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Quantity
//               </label>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 min="1"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               />
//             </div>
//           </div>

//           {/* Free Shipping */}
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               checked={isFreeShipping}
//               onChange={(e) => setIsFreeShipping(e.target.checked)}
//               className="w-5 h-5 text-primary border-gray-300 rounded accent-secondary"
//             />
//             <label className="ml-2 text-secondary font-medium">
//               Free Shipping
//             </label>
//           </div>

//           {isFreeShipping && (
//             <div>
//               <label className="block text-secondary font-medium mb-1">
//                 Free Shipping Condition
//               </label>
//               <input
//                 type="text"
//                 value={freeShippingCondition}
//                 onChange={(e) => setFreeShippingCondition(e.target.value)}
//                 placeholder="e.g. On orders above $100"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="bg-secondary text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
//             onClick={() => setActiveTab(2)}
//           >
//             Next
//           </button>
//         </form>
//       )}
//       {activeTab === 2 && (
//         <div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <input
//               type="number"
//               placeholder="Min Qty"
//               value={offerInput.minQty}
//               onChange={(e) =>
//                 setOfferInput({ ...offerInput, minQty: e.target.value })
//               }
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//             />
//             <input
//               type="number"
//               placeholder="Max Qty"
//               value={offerInput.maxQty}
//               onChange={(e) =>
//                 setOfferInput({ ...offerInput, maxQty: e.target.value })
//               }
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//             />
//             <input
//               type="number"
//               placeholder="Discount %"
//               value={offerInput.discount}
//               onChange={(e) =>
//                 setOfferInput({ ...offerInput, discount: e.target.value })
//               }
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
//             />
//           </div>

//           <button
//             onClick={addOffer}
//             className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90 mb-4"
//           >
//             Add Offer
//           </button>

//           {/* Offers Table */}
//           {salesOffers.length > 0 && (
//             <table className="w-full border border-gray-300 text-left">
//               <thead>
//                 <tr className="bg-primary text-white">
//                   <th className="p-2 border">Quantity Range</th>
//                   <th className="p-2 border">Discount</th>
//                   <th className="p-2 border">Price After Discount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {salesOffers.map((offer, index) => (
//                   <tr key={index} className="border">
//                     <td className="p-2 border">{offer.qtyRange}</td>
//                     <td className="p-2 border">{offer.discount}</td>
//                     <td className="p-2 border">{offer.finalPrice}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [freeShippingCondition, setFreeShippingCondition] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [description, setDescription] = useState("");
  const [certificatePreview, setCertificatePreview] = useState(null);
  const [hplcPreview, setHplcPreview] = useState(null);
  const [massSpecPreview, setMassSpecPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    size: "",
    contents: "",
    form: "",
    purity: "",
    sku: "",
    quantity: 1,
    certificate: null,
    hplc: null,
    massSpectrometry: null,
  });

  const [salesOffers, setSalesOffers] = useState([]);
  const [offerInput, setOfferInput] = useState({
    minQty: "",
    maxQty: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });

      // Create preview for images
      if (file && file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        if (name === "certificate") setCertificatePreview(previewUrl);
        if (name === "hplc") setHplcPreview(previewUrl);
        if (name === "massSpectrometry") setMassSpecPreview(previewUrl);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      description,
      freeShipping: isFreeShipping,
      freeShippingCondition,
      productImage,
      salesOffers,
    });
    alert("Form submitted!");
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

  // Rich text editor functions
  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    document.getElementById("description-editor").focus();
  };

  const handleDescriptionChange = () => {
    const content = document.getElementById("description-editor").innerHTML;
    setDescription(content);
  };

  const insertList = (ordered = false) => {
    const command = ordered ? "insertOrderedList" : "insertUnorderedList";
    applyFormat(command);
  };

  const nextTab = () => setActiveTab((prev) => prev + 1);
  const prevTab = () => setActiveTab((prev) => prev - 1);

  const tabs = [
    "Product Info",
    "Sales & Offers",
    "Description",
    "Certificate",
    "HPLC",
    "Mass Spectrometry",
  ];

  return (
    <div className="p-6 text-gray-700">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 flex-wrap">
        {tabs.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`px-4 py-2 font-medium ${
              activeTab === index + 1
                ? "border-b-2 border-secondary text-secondary"
                : "text-gray-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab 1: Product Info */}
      {activeTab === 1 && (
        <div className="space-y-5">
          {/* Product Image Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 border-2 border-dashed border-secondary rounded-full flex items-center justify-center overflow-hidden">
              {productImage ? (
                <img
                  src={productImage}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500 text-sm">No Image</span>
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
            {[
              {
                label: "Product Name",
                name: "name",
                type: "text",
                required: true,
              },
              {
                label: "Price ($)",
                name: "price",
                type: "number",
                required: true,
              },
              { label: "Size", name: "size", type: "text" },
              { label: "Contents", name: "contents", type: "text" },
              { label: "Form", name: "form", type: "text" },
              { label: "Purity", name: "purity", type: "text" },
              { label: "SKU", name: "sku", type: "text" },
              { label: "Quantity", name: "quantity", type: "number" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-secondary font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  required={field.required || false}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                />
              </div>
            ))}
          </div>

          {/* Free Shipping */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isFreeShipping}
              onChange={(e) => setIsFreeShipping(e.target.checked)}
              className="w-5 h-5 text-secondary border-gray-300 rounded accent-secondary"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
              />
            </div>
          )}

          <button
            type="button"
            className="bg-secondary text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
            onClick={nextTab}
          >
            Next
          </button>
        </div>
      )}

      {/* Tab 3: Sales & Offers */}
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
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
            />
            <input
              type="number"
              placeholder="Max Qty"
              value={offerInput.maxQty}
              onChange={(e) =>
                setOfferInput({ ...offerInput, maxQty: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
            />
            <input
              type="number"
              placeholder="Discount %"
              value={offerInput.discount}
              onChange={(e) =>
                setOfferInput({ ...offerInput, discount: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
            />
          </div>

          <button
            onClick={addOffer}
            className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90 mb-4"
          >
            Add Offer
          </button>

          {salesOffers.length > 0 && (
            <table className="w-full border border-gray-300 text-left mb-4">
              <thead>
                <tr className="bg-secondary text-white">
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

          <div className="flex gap-4">
            <button
              onClick={prevTab}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={nextTab}
              className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* Tab 2: Description */}
      {activeTab === 3 && (
        <div>
          <label className="block text-secondary font-medium mb-3">
            Product Description
          </label>

          {/* Rich Text Editor Toolbar */}
          <div className="border border-gray-300 rounded-t-lg p-2 bg-gray-50 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyFormat("bold")}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 font-bold"
              title="Bold"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat("italic")}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 italic"
              title="Italic"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => applyFormat("underline")}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 underline"
              title="Underline"
            >
              U
            </button>
            <div className="w-px bg-gray-300 mx-1"></div>
            <button
              type="button"
              onClick={() => insertList(false)}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
              title="Bullet List"
            >
              • List
            </button>
            <button
              type="button"
              onClick={() => insertList(true)}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
              title="Numbered List"
            >
              1. List
            </button>
            <div className="w-px bg-gray-300 mx-1"></div>
            <select
              onChange={(e) => applyFormat("fontSize", e.target.value)}
              className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
              title="Font Size"
            >
              <option value="3">Normal</option>
              <option value="1">Small</option>
              <option value="4">Large</option>
              <option value="6">Extra Large</option>
            </select>
            <input
              type="color"
              onChange={(e) => applyFormat("foreColor", e.target.value)}
              className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
              title="Text Color"
            />
          </div>

          {/* Rich Text Editor */}
          <div
            id="description-editor"
            contentEditable
            onInput={handleDescriptionChange}
            className="w-full min-h-48 border border-gray-300 border-t-0 rounded-b-lg px-4 py-3 focus:outline-none focus:border-secondary"
            style={{ maxHeight: "300px", overflowY: "auto" }}
            placeholder="Enter product description..."
          ></div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={prevTab}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={nextTab}
              className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* Tab 4: Certificate */}
      {activeTab === 4 && (
        <div>
          <label className="block text-secondary font-medium mb-3">
            Upload Certificate (Optional)
          </label>

          <div className="mb-4">
            <input
              type="file"
              name="certificate"
              accept=".pdf,.jpg,.png,.jpeg"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Image Preview */}
          {certificatePreview && (
            <div className="mb-4">
              <p className="text-secondary font-medium mb-2">Preview:</p>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <img
                  src={certificatePreview}
                  alt="Certificate Preview"
                  className="max-w-full max-h-64 object-contain mx-auto"
                />
              </div>
            </div>
          )}

          {/* PDF Preview */}
          {formData.certificate &&
            formData.certificate.type === "application/pdf" && (
              <div className="mb-4">
                <p className="text-secondary font-medium mb-2">
                  PDF File Selected:
                </p>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <p className="text-secondary">{formData.certificate.name}</p>
                  <p className="text-sm text-gray-500">
                    Size: {(formData.certificate.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
            )}

          <div className="flex gap-4">
            <button
              onClick={prevTab}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={nextTab}
              className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: HPLC */}
      {activeTab === 5 && (
        <div>
          <label className="block text-secondary font-medium mb-3">
            Upload HPLC (Optional)
          </label>

          <div className="mb-4">
            <input
              type="file"
              name="hplc"
              accept=".pdf,.jpg,.png,.jpeg"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Image Preview */}
          {hplcPreview && (
            <div className="mb-4">
              <p className="text-secondary font-medium mb-2">Preview:</p>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <img
                  src={hplcPreview}
                  alt="HPLC Preview"
                  className="max-w-full max-h-64 object-contain mx-auto"
                />
              </div>
            </div>
          )}

          {/* PDF Preview */}
          {formData.hplc && formData.hplc.type === "application/pdf" && (
            <div className="mb-4">
              <p className="text-secondary font-medium mb-2">
                PDF File Selected:
              </p>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <p className="text-secondary">{formData.hplc.name}</p>
                <p className="text-sm text-gray-500">
                  Size: {(formData.hplc.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={prevTab}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={nextTab}
              className="bg-secondary text-white px-6 py-2 rounded-lg shadow hover:bg-secondary/90"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Tab 6: Mass Spectrometry */}
      {activeTab === 6 && (
        <div>
          <label className="block text-secondary font-medium mb-3">
            Upload Mass Spectrometry (Optional)
          </label>

          <div className="mb-4">
            <input
              type="file"
              name="massSpectrometry"
              accept=".pdf,.jpg,.png,.jpeg"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Image Preview */}
          {massSpecPreview && (
            <div className="mb-4">
              <p className="text-secondary font-medium mb-2">Preview:</p>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <img
                  src={massSpecPreview}
                  alt="Mass Spectrometry Preview"
                  className="max-w-full max-h-64 object-contain mx-auto"
                />
              </div>
            </div>
          )}

          {/* PDF Preview */}
          {formData.massSpectrometry &&
            formData.massSpectrometry.type === "application/pdf" && (
              <div className="mb-4">
                <p className="text-secondary font-medium mb-2">
                  PDF File Selected:
                </p>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <p className="text-secondary">
                    {formData.massSpectrometry.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Size: {(formData.massSpectrometry.size / 1024).toFixed(2)}{" "}
                    KB
                  </p>
                </div>
              </div>
            )}

          <div className="flex gap-4">
            <button
              onClick={prevTab}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
