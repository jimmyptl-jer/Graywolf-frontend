import { Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="md:m-8 lg:m-8"> {/* Added margin */}
      <div className="container mx-auto shadow-lg rounded-lg overflow-hidden">
        <h2 className='text-orange-300 text-3xl md:text-4xl lg:text-5xl py-4'>Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 md:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-l-4 border border-slate-700">
            <FaProjectDiagram className="text-white text-5xl mb-4" />
            <h3 className="text-xl md:text-2xl text-white mt-4 mb-2">Project Title 1</h3>
            <p className="text-white mb-4 overflow-hidden" style={{ WebkitLineClamp: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio euismod, aliquet eros eget, vehicula mauris.
            </p>
            <Link to="https://mernhotelbookingapp.onrender.com" className="text-orange-300 hover:underline block">
              Check it out
            </Link>
          </div>
          <div className="p-6 md:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-l-4 border border-slate-700">
            <FaProjectDiagram className="text-white text-5xl mb-4" />
            <h3 className="text-xl md:text-2xl text-white mt-4 mb-2">Project Title 2</h3>
            <p className="text-white mb-4 overflow-hidden" style={{ WebkitLineClamp: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in odio euismod, aliquet eros eget, vehicula mauris.
            </p>
            <Link to="https://mernhotelbookingapp.onrender.com" className="text-orange-300 hover:underline block">
              Check it out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
