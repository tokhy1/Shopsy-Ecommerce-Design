/* eslint-disable react/prop-types */
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkModeButton";

const UpperNav = ({ handleOrderPopup }) => {
  return (
    <div className="bg-primary/40 py-2">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div>
          <a
            href="#"
            className="uppercase font-bold dark:text-white text-gray-900 text-2xl sm:text-3xl flex gap-2"
          >
            <img src={Logo} alt="shopsy logo" className="w-10" />
            Shopsy
          </a>
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Search bar */}
          <div className="group hidden sm:block relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
            />
            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
          </div>

          {/* Order button */}
          <button
            onClick={handleOrderPopup}
            className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
          >
            <span className="group-hover:block hidden transition-all duration-200 font-medium">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm" />
          </button>

          {/* Darkmode Switch */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
