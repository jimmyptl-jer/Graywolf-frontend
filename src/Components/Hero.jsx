import { useNavigate } from 'react-router-dom';

// Import your image file
import backgroundImage from '../assets/Background.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-center text-white h-screen flex flex-col items-center justify-center px-8 md:px-1 m-5 md:m-0 lg:m-0 transition-transform duration-300 ease-in-out transform bg-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-7xl md:text-9xl leading-tight mb-4">
          Software Developer
          <br />
          & Coffee Addict
        </h1>
        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="btn-primary border text-white px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500 hover:bg-orange-300 hover:border-none  mr-4"
          >
            Get In Touch
          </button>
          <button
            type="button"
            className="btn-secondary  border px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500 hover:text-orange-300 "
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
