// Tiles component
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
    {
      title: "Graphic Design",
      message:
        "We offer creative graphic design services to help your brand stand out.",
      link: "/contact",
    },
  ];

  return (
    <div className="md:m-8 lg:m-8 flex justify-center">
      <div className="container">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center mb-10 text-orange-300">Working Space</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tilesData.map((tile, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col border-l-4 border border-slate-700 transition duration-300 transform hover:scale-105 hover:border-orange-300 shadow-md p-4">
                <h3 className="text-3xl text-white mb-4">{tile.title}</h3>
                <p className="text-gray-300 mb-4">{tile.message}</p>
                <Link
                  to={tile.link}
                  className="text-white hover:text-orange-300 flex items-center  transition duration-300 py-2  border-orange-300 hover:border-b"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tiles;
