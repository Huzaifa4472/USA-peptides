import Logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [count, setCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-black text-white sticky top-0 z-50">
      <div className="md:w-[80%] w-[90%] mx-auto flex items-center justify-between md:py-3 py-3">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="md:w-32 w-24" />
        </NavLink>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:!flex items-center font-medium gap-6 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px]"
                  : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/peptides"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px]"
                  : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
              }
            >
              PEPTIDES FOR SALE
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px]"
                  : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px]"
                  : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
              }
            >
              CONTACT
            </NavLink>
          </nav>

          {/* Icons */}
          <div className="text-2xl flex items-center sm:gap-6 gap-3">
            <NavLink to="/my-accounts">
              <HiOutlineUser className="lg:!flex hidden" />
            </NavLink>
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <FaShoppingCart />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </div>
            <IoMdSearch />
            <div
              className="lg:hidden text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoMdClose /> : <SlMenu />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-t-2 border-primary ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black px-6`}
      >
        <nav className="flex flex-col gap-4 py-4 font-medium ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px]"
                : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
            }
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/peptides"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px]"
                : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
            }
            onClick={() => setMenuOpen(false)}
          >
            PEPTIDES FOR SALE
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px]"
                : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
            }
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px]"
                : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
            }
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </NavLink>
          <div className="flex items-center justify-between">
            <NavLink
              to="/my-accounts"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[14px]"
                  : "hover:text-primary transition-all duration-500 ease-in-out text-[14px]"
              }
              onClick={() => setMenuOpen(false)}
            >
              MY ACCOUNT
            </NavLink>
            <NavLink
              to="/my-accounts"
              className={({ isActive }) =>
                isActive ? "text-primary text-[14px]" : "hover:text-primary"
              }
              onClick={() => setMenuOpen(false)}
            >
              <button className="border border-primary text-primary px-4 py-1 rounded-lg">
                LOGIN
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsCartOpen(false)}
          />
        </div>

        <div className="p-4 space-y-4">
          {/* Example Cart Items - Replace with your actual cart items */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Product Name</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
            </div>
            <p className="font-semibold">$25.00</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Another Product</p>
              <p className="text-sm text-gray-600">Quantity: 2</p>
            </div>
            <p className="font-semibold">$50.00</p>
          </div>
          {/* ... More Items */}
        </div>
      </div>
    </div>
  );
};

export default Header;
