import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';

// Import your image file
import backgroundImage from '../assets/Background.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative text-center text-white h-screen flex flex-col items-center justify-center px-8 md:px-1 m-5 md:m-0 lg:m-0 transition-transform duration-300 ease-in-out transform bg-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
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
            className="btn-primary border text-white px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500 hover:bg-orange-300 hover:border-none mr-4"
          >
            Get In Touch
          </button>
          <button
            type="button"
            className="btn-secondary border px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500 hover:text-orange-300"
          >
            Watch Video
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-5 w-full text-center text-orange-300">
        <div className="flex flex-col  items-center justify-between px-4 md:px-8 lg:px-16 gap-6 text-sm md:text-base">
          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-orange-300">
            <a href="https://github.com/jimmyptl-jer" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-orange-500 transition duration-300 text-lg md:text-xl lg:text-2xl" />
            </a>
            <a href="https://medium.com/@jimmyptl46" target="_blank" rel="noopener noreferrer">
              <FaMedium className="hover:text-orange-500 transition duration-300 text-lg md:text-xl lg:text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/jimmy-patel-b09311160/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-orange-500 transition duration-300 text-lg md:text-xl lg:text-2xl" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <a href="mailto:jimmyptl46@gmail.com" className="font-semibold">jimmyptl46@gmail.com</a>
            </span>

            <span className="hover:text-orange-500 transition duration-300 cursor-pointer font-bold">
              (+1) 647-865-8471 | (+91) 910-676-6041
            </span>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Hero;
