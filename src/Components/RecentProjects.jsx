import { Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import projectImage from '../assets/project-1.svg';
import projectImage2 from '../assets/project-2.svg';

const RecentProjects = () => {
  return (
    <div className="md:m-8 lg:m-8"> {/* Added margin */}
      <div className="container mx-auto shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl md:text-4xl lg:text-6xl mb-10 text-orange-300">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 md:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-l-4 border border-slate-700">
            <div className="md:mr-6">
              {/* Use the imported SVG image */}
              <img src={projectImage} alt="Project Image" className="w-full h-full mb-2" />
            </div>
            <h3 className="text-xl md:text-2xl text-white mt-4 mb-2">E2F Systems</h3>
            <p className="text-white mb-4 overflow-hidden" style={{ WebkitLineClamp: 3 }}>
              E2F Systems is a platform where users can explore different funding schemes available based on their company information. The project allows the admin to add new schemes and manage users.
            </p>
            <Link to="https://github.com/jimmyptl-jer/Internship--E2F-Systems-Project" className="text-orange-300 hover:underline block">
              Check it out
            </Link>
          </div>
          <div className="p-6 md:p-8 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-l-4 border border-slate-700">
            <div className="md:mr-6">
              {/* Use the imported SVG image */}
              <img src={projectImage2} alt="Project Image" className="w-full h-full mb-2" />
            </div>
            <h3 className="text-xl md:text-2xl text-white mt-4 mb-2">Hotel Booking App</h3>
            <p className="text-white mb-4 overflow-hidden" style={{ WebkitLineClamp: 3 }}>
              The Hotel Booking App is a comprehensive solution for managing hotel bookings, guest information, room availability, and more. It provides an intuitive interface for both hotel staff and guests, ensuring smooth booking experiences.
            </p>
            <Link to="https://github.com/jimmyptl-jer/Hotel--Management--Application-MERN-Stack-Technology" className="text-orange-300 hover:underline block">
              Check it out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
