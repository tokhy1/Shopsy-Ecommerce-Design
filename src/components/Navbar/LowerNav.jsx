import { FaCaretDown } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const LowerNav = () => {
  return (
    <div data-aos="zoom-in" className="flex justify-center">
      <ul className="sm:flex hidden items-center gap-4">
        {Menu.map((data) => {
          return (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          );
        })}

        {/* Dropdown and links */}
        <li className="group relative cursor-pointer">
          <a href="#" className="flex items-center gap-[4px] py-2">
            Trending Products
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>

          <div className="hidden group-hover:block z-[999] absolute w-[200px] rounded-md bg-white p-2 text-black shadow-md">
            <ul>
              {DropdownLinks.map((data) => {
                return (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="rounded-md w-full p-2 inline-block hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LowerNav;
