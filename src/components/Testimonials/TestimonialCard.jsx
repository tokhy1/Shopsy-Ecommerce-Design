/* eslint-disable react/prop-types */
const TestimonialCard = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/20 relative">
        <div className="mb-4">
          <img src={data.img} alt="image" className="rounded-full w-20 h-20" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="space-y-3">
            <p className="text-xs text-gray-500">{data.text}</p>
            <h1 className="text-xl font-bold text-black/80 dark:text-gray-300">
              {data.name}
            </h1>
          </div>
        </div>
        <p className="text-black/20 dark:text-gray-600 text-9xl font-serif absolute top-0 right-0">
          ,,
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
