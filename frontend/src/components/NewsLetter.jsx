import { useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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
        <div className="w-[90%] md:w-[50%] bg-black bg-opacity-80 py-10 px-10 flex flex-col gap-6 items-center justify-center rounded-lg">
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
              className="w-full px-4 py-2 rounded bg-transparent border border-blue-300 text-blue-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-transparent border border-blue-300 text-blue-300 focus:outline-none"
            />
            <div className="flex items-center w-full px-2 py-1 border border-blue-300 rounded bg-transparent text-blue-300 focus-within:ring-2 focus:outline-none">
              <PhoneInput
                placeholder="Enter phone number"
                international
                defaultCountry="US"
                value={phone}
                onChange={setPhone}
                className="flex-1 py-1 [&>input]:bg-transparent [&>input]:text-blue-300 [&>input]:placeholder:text-blue-300 [&>input]:outline-none [&>input]:ring-0 focus:[&>input]:outline-none focus:[&>input]:ring-0"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-transparent hover:text-secondary border border-secondary text-white py-2 rounded font-semibold transition-all duration-500 ease-in-out"
            >
              Subscribe
            </button>
            <label className="flex items-center  gap-2">
              <input type="checkbox" className="accent-blue-300" />
              Text me with offers and updates
            </label>
            <div className=" text-blue-300 flex items-center justify-between gap-2">
              <p className="text-xs">
                We promise not to spam you. Read our privacy policy for more
                information.
              </p>
              <a href="/privacy-policy">
                <HiArrowTopRightOnSquare size={25} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
