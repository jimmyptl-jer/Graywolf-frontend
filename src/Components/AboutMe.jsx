// AboutMe component
import { useNavigate } from 'react-router-dom';
import { BsMedium } from 'react-icons/bs';
import JimmyImage from '../assets/jimmy.jpg';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20 text-white m-5 md:m-0 lg:m-0">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={JimmyImage} alt="Jimmy Patel" className="w-full h-auto md:max-w-lg md:mx-auto shadow-md rounded-lg" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Hi, I'm Jimmy Patel</h1>
        <p className="text-lg md:text-xl mb-6">
          A Software Engineer with a focus on building robust and scalable applications using the <strong>MERN Stack</strong>. Whether it is developing seamless user interfaces or optimizing backend systems, I specialize in delivering solutions that solve real-world problems.
        </p>
        <p className="text-lg md:text-xl mb-6">
          With expertise in web development, DevOps, and cloud technologies like AWS, I bridge the gap between development and deployment. From consulting to implementation, I provide end-to-end support for your projects.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Beyond coding, I’m passionate about mentoring, sharing knowledge through blogs, and experimenting with emerging technologies. In my downtime, you can find me exploring new cafes and refining my next big idea over a great cup of coffee.
        </p>
        <div className="flex items-center mb-6">
          <a
            href="https://medium.com/@jimmyptl46"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-xl hover:text-orange-300"
          >
            <BsMedium />
          </a>
        </div>
        <button
          type="button"
          onClick={() => navigate('/about')}
          className="btn-primary border text-white px-5 py-3 font-medium text-base cursor-pointer text-center transition duration-500 hover:bg-orange-300 hover:border-none mr-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
