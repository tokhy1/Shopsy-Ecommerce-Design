/* eslint-disable react/prop-types */
import UpperNav from "./UpperNav";
import LowerNav from "./LowerNav";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <UpperNav handleOrderPopup={handleOrderPopup} />

      {/* Lower Navbar */}
      <LowerNav />
    </div>
  );
};

export default Navbar;
