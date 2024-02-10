import { useNavigate } from 'react-router-dom';
import JimmyImage from '../assets/jimmy.jpg';

const AboutMe = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={JimmyImage} alt="Jimmy's Image" className="w-full h-auto md:max-w-lg md:mx-auto shadow-md" />
      </div>
      <div className="md:w-1/2 text-white">
        <h2 className="text-7xl  mb-4">Being a Full Stack Developer</h2>
        <p className="text-base md:text-lg mb-6">
          As a developer, my passion and focus are dedicated to crafting websites that not only look stunning but also function seamlessly. Let's cut through the marketing jargon – I build websites that work. If you're curious to learn more about collaborating with me, explore my website.
        </p>

        <button
          type="button"
          onClick={() => navigate('/about')}
          className="btn-primary border text-white px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500  hover:bg-orange-300 hover:border-none  mr-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
