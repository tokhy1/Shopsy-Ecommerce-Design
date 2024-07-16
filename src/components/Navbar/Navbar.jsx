import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="uppercase font-bold dark:text-white text-gray-900 text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="shopsy logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* Search bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="group hidden sm:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:text-black"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order button */}
            <button
              onClick={() => alert("This feature not available yet!")}
              className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              <span className="group-hover:block hidden transition-all duration-200 font-medium">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
