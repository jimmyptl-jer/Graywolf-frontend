import { Link } from "react-router-dom";

const Tiles = () => {
  // Tile data
  const tilesData = [
    {
      title: "Consulting",
      message:
        "Our consulting services help businesses improve their strategies and operations.",
      link: "/contact",
    },
    {
      title: "Web Application",
      message:
        "We specialize in developing scalable and user-friendly web applications.",
      link: "/contact",
    },
    {
      title: "Development",
      message:
        "Our development team crafts high-quality software solutions tailored to your needs.",
      link: "/contact",
    },
    {
      title: "DevOps",
      message:
        "We provide DevOps solutions to streamline development and deployment processes.",
      link: "/contact",
    },
  ];

  return (
    <div className="container items-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl text-center mb-10">Working Space</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
        {tilesData.map((tile, index) => (
          <div key={index} className="p-4 w-full">
            <div className="flex flex-col border-l-4 border border-slate-700 transition duration-300 hover:border-orange-300 border-solid p-6 md:p-10 shadow-md">
              <h3 className="text-3xl  text-white mb-4 w-full">
                {tile.title}
              </h3>
              <p className="text-gray-300 mb-4 w-full">{tile.message}</p>
              <Link
                to={tile.link}
                className="text-white hover:text-orange-300 hover:border-b hover:border-orange-300  flex items-center w-full transition duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
