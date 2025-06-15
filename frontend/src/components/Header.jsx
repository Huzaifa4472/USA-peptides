import Logo from "../assets/core-logo.svg";
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

  return (
    <div className="bg-black text-white">
      <div className="sm:w-[80%] w-[90%] mx-auto flex items-center justify-between py-6">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:!flex items-center font-medium gap-6 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9C6B2B]"
                  : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/peptides"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9C6B2B]"
                  : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
              }
            >
              PEPTIDES FOR SALE
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9C6B2B]"
                  : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9C6B2B]"
                  : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
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
            <div className="relative">
              <FaShoppingCart />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#9C6B2B] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-t-2 border-[#9C6B2B] ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black px-6`}
      >
        <nav className="flex flex-col gap-4 py-4 font-medium ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#9C6B2B]"
                : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
            }
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/peptides"
            className={({ isActive }) =>
              isActive
                ? "text-[#9C6B2B]"
                : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
            }
            onClick={() => setMenuOpen(false)}
          >
            PEPTIDES FOR SALE
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#9C6B2B]"
                : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
            }
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#9C6B2B]"
                : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <div className="flex items-center justify-between">
            <NavLink
              to="/my-accounts"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9C6B2B]"
                  : "hover:text-[#9C6B2B] transition-all duration-500 ease-in-out"
              }
              onClick={() => setMenuOpen(false)}
            >
              My Account
            </NavLink>
            <NavLink
              to="/my-accounts"
              className={({ isActive }) =>
                isActive ? "text-[#9C6B2B]" : "hover:text-[#9C6B2B]"
              }
              onClick={() => setMenuOpen(false)}
            >
              <button className="border border-[#9C6B2B] text-[#9C6B2B] px-4 py-1 rounded-lg">
                LOGIN
              </button>
            </NavLink>
          </div>
          {/* Icons on Mobile */}
          <div className="flex items-center gap-4 mt-4"></div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
