import { Link } from 'react-router-dom';
import Project1 from '../assets/jimmy.jpg';
import Project2 from '../assets/jimmy.jpg';

const RecentProjects = () => {
  return (
    <div className="container mx-auto shadow-lg rounded-lg overflow-hidden m-8">
      <h2 className='text-orange-300 text-3xl md:text-4xl lg:text-5xl px-6 py-4 '>Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 md:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <img src={Project1} alt="Project 1" className="w-full h-auto object-cover rounded-lg" />
          <h3 className="text-xl md:text-2xl text-white mt-4 mb-2">Project Title 1</h3>
          <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio euismod, aliquet eros eget, vehicula mauris.</p>
          <Link to="https://mernhotelbookingapp.onrender.com" className="text-orange-300 hover:underline block">
            Check it out
          </Link>
        </div>
        <div className="p-6 md:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <img src={Project2} alt="Project 2" className="w-full h-auto object-cover rounded-lg" />
          <h3 className="text-xl md:text-2xl text-white mt-4 mb-2">Project Title 2</h3>
          <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio euismod, aliquet eros eget, vehicula mauris.</p>
          <Link to="https://mernhotelbookingapp.onrender.com" className="text-orange-300 hover:border hover:border-orange-300 block">
            Check it out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
