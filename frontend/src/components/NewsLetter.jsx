import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const NewsLetterBg = require("../assets/news-letter.png");

const NewsLetter = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="relative w-full">
      <img
        src={NewsLetterBg}
        alt="Newsletter Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] text-white px-4">
        <div className="w-[90%] md:w-[50%] bg-black bg-opacity-80 py-6 px-6 flex flex-col gap-6 items-center justify-center rounded-lg">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="font-medium text-blue-300">
              ENJOY PROMOTIONS AND DISCOUNTS
            </p>
          </div>
          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded bg-transparent border border-white text-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-transparent border border-white text-black focus:outline-none"
            />
            <label className="flex items-center text-sm gap-2">
              <input type="checkbox" className="accent-red-600" />
              Text me with offers and updates
            </label>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
