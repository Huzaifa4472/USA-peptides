import React from "react";
import Background from "../assets/about-bg.png";
const AboutUs = () => {
  return (
    <div className="flex flex-col items-end gap-14 mb-20">
      <div className="flex items-center w-[90%] ">
        <h1 className="w-[40%] text-gradient text-6xl font-bold ">
          ABOUT CORE PEPTIDES
        </h1>
        <img src={Background} className="w-[60%] " />
      </div>
      <div className="flex items-center w-[90%]">
        <p className="w-[95%] text-[#666]">
          We are a leading provider of high-quality peptides for laboratories,
          researchers, and academic institutions across the globe. All our
          products are synthesized and lyophilized in the United States, with
          purity levels exceeding 99%+. We have a wide offering of standard
          peptides as well as topical peptides, peptide blends, customizable
          orders, and an expert team ready to assist you.
        </p>
      </div>
      <div className="w-[90%] text-3xl text-[#333] font-semibold">
        <h1>Why Choose Us?</h1>
      </div>
      <div className="w-[90%] flex flex-col gap-6 text-[#666] font-semibold">
        <div className="font-normal w-[90%]">
          <span className=" text-lg font-semibold">Top Quality:</span> Our
          peptides are manufactured locally against the highest standards for
          synthesis, undergoing rigorous quality control measures to ensure
          their purity, stability, and consistency.
        </div>
        <div className="font-normal w-[90%]">
          <span className=" text-lg font-semibold">Range of Products:</span> We
          offer a comprehensive and industry-leading peptide catalog. Whether
          you require standard peptides, blends, topical peptides, or customized
          orders, our experienced team is ready to assist you.
        </div>
        <div className="font-normal w-[90%]">
          <span className=" text-lg font-semibold">
            Expert Customer Service:
          </span>
          We believe in building long-lasting relationships with our customers.
          Our dedicated customer support team is here to support you. We will do
          everything in our power to ensure that our customers are satisfied,
          even after products are delivered.
        </div>
        <div className="font-normal w-[90%]">
          <span className=" text-lg font-semibold">
            Fast and Free Delivery:
          </span>
          We strive to provide fast and reliable delivery, no matter where you
          are. For orders over $200, the shipping is on us.
        </div>
        <div className="font-normal w-[90%]">
          For customized peptide inquiries or to place an order, please reach
          out to our customer support team by visiting our
          <span className=" text-lg font-semibold">Contact page</span>.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
