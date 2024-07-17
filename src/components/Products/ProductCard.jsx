import { FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const ProductCard = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      className="space-y-3"
    >
      <img
        src={data.img}
        alt="product image"
        className="h-[220px] w-[150px] object-cover rounded-md"
      />
      <div>
        <h3 className="font-semibold">{data.title}</h3>
        <p className="text-sm text-gray-600">{data.color}</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{data.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
