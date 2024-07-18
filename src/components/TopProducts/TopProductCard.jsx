import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const TopProductCard = ({ data }) => {
  return (
    <div
      data-aos="zoom-in"
      className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl transition-all duration-300 group max-w-[300px]"
    >
      {/* Image section */}
      <div className="h-[100px]">
        <img
          src={data.img}
          alt="product image"
          className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
        />
      </div>

      {/* Details section */}
      <div className="p-5 text-center">
        {/* Star rating */}
        <div className="w-full flex items-center justify-center gap-1">
          <FaStar className="text-yellow-500 dark:group-hover:text-white" />
          <FaStar className="text-yellow-500 dark:group-hover:text-white" />
          <FaStar className="text-yellow-500 dark:group-hover:text-white" />
          <FaStar className="text-yellow-500 dark:group-hover:text-white" />
        </div>

        <h1 className="text-xl dark:text-white font-bold">{data.title}</h1>
        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
          {data.description}
        </p>
        <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default TopProductCard;
