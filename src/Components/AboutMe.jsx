import { useNavigate } from 'react-router-dom';
import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs';
import { TiSocialLinkedin } from "react-icons/ti";
import JimmyImage from '../assets/jimmy.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={JimmyImage} alt="Jimmy's Image" className="w-full h-auto md:max-w-lg md:mx-auto shadow-md" />
      </div>
      <div className="md:w-1/2 text-white">
        <h2 className="text-7xl mb-4">Being a Full Stack Developer</h2>
        <p className="text-base md:text-lg mb-6">
          As a developer, my passion and focus are dedicated to crafting websites that not only look stunning but also function seamlessly. Let's cut through the marketing jargon – I build websites that work. If you're curious to learn more about collaborating with me, explore my website.
        </p>

        <div className="flex gap-6 sm:mt-0 m-4 ml-0">
          <Link
            className="transition duration-500 hover:bg-orange-300 rounded-full hover:rounded-full  p-2 sm:p-3 md:p-4"
            to="https://www.linkedin.com/in/jimmy-patel-b09311160/"
            target="_blank"
            rel="noopener noreferrer">
            <TiSocialLinkedin size={28} className="sm:h-8" />
          </Link>
          <Link
            to="https://www.github.com/jimmyptl-jer"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:bg-orange-300 rounded-full hover:rounded-full p-2 sm:p-3 md:p-4">
            <BsGithub size={28} className="sm:h-8 " />
          </Link>
          <Link
            to="https://medium.com/@jimmyptl46"
            target="_blank"
            className="transition duration-500 hover:bg-orange-300 rounded-full hover:rounded-full p-2 sm:p-3 md:p-4"
            rel="noopener noreferrer">
            <BsMedium size={28} className="sm:h-8" />
          </Link>
        </div>


        <button
          type="button"
          onClick={() => navigate('/about')}
          className="btn-primary border text-white px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500 hover:bg-orange-300 hover:border-none mr-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
