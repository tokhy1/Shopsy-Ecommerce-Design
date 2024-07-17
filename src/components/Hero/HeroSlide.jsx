/* eslint-disable react/prop-types */
const HeroSlide = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* text content */}
        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            {data.title}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-sm"
          >
            {data.description}
          </p>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
              Order Now
            </button>
          </div>
        </div>
        {/* image content */}
        <div className="order-1 sm:order-2">
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="relative z-10"
          >
            <img
              src={data.img}
              alt="image"
              className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
