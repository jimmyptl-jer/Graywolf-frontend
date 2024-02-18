// AboutMe component
import { useNavigate } from 'react-router-dom';
import { BsGithub, BsMedium } from 'react-icons/bs';
import { TiSocialLinkedin } from "react-icons/ti";
import JimmyImage from '../assets/jimmy.jpg';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20 text-white m-5 md:m-0 lg:m-0 ">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={JimmyImage} alt="Jimmy's Image" className="w-full h-auto md:max-w-lg md:mx-auto shadow-md" />
      </div>
      <div className="md:w-1/2">
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          I'm a Software Engineer based in Toronto,with the focus on the MERN Stack, I'm passionate about crafting applications that not only look stunning but also function seamlessly. My focus is on building solutions that work, cutting through the marketing jargon to deliver practical results.
        </p>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          With years of experience in web development, software engineering, and DevOps practices, I specialize in creating scalable and user-friendly solutions. From consulting to development and deployment, I provide end-to-end solutions tailored to your needs.
        </p>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          In addition to my technical skills, I'm a coffee addict and enjoy exploring new cafes in my free time. I believe a good cup of coffee fuels creativity and helps me stay focused on delivering high-quality work for my clients.
        </p>
        <div className="flex gap-6 sm:mt-0 m-4 ml-0">
          <a
            href="https://www.linkedin.com/in/jimmy-patel-b09311160/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:bg-orange-300 rounded-full hover:rounded-full  p-2 sm:p-3 md:p-4"
          >
            <TiSocialLinkedin size={28} className="sm:h-8" />
          </a>
          <a
            href="https://www.github.com/jimmyptl-jer"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:bg-orange-300 rounded-full hover:rounded-full p-2 sm:p-3 md:p-4"
          >
            <BsGithub size={28} className="sm:h-8 " />
          </a>
          <a
            href="https://medium.com/@jimmyptl46"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:bg-orange-300 rounded-full hover:rounded-full p-2 sm:p-3 md:p-4"
          >
            <BsMedium size={28} className="sm:h-8" />
          </a>
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
