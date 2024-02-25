import BlogPostImage1 from '../assets/jimmy.jpg';
import BlogPostImage2 from '../assets/jimmy.jpg';
import BlogPostImage3 from '../assets/jimmy.jpg';

import { Link } from 'react-router-dom'

const LatestBlogPosts = () => {
  return (
    <div className='md:m-8'>
      <div className="container mx-auto justify-between shadow-md">
        <h2 className="text-4xl  mb-6">LATEST BLOG POSTS</h2>
        <p className="text-lg mb-6">
          Explore my thoughts and insights on various topics related to the tech industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="mb-4 md:mb-8 flex flex-col items-start">
            <img src={BlogPostImage1} alt="Blog Post 1" className="w-80 h-90 object-cover mb-4" />
            <h3 className="text-xl  mb-2">Web Development Trends</h3>
            <p className="mb-4">
              Stay updated with the latest trends in software world and discover what's shaping the industry.
            </p>
            <Link to='https://medium.com/@jimmyptl46/a-guide-to-containerizing-a-mern-stack-application-dd8c647d2b78'>Read More</Link>
            <a href="#blogPost1" className="text-orange-300 hover:underline block">
              Read More
            </a>
          </div>
          <div className="mb-4 md:mb-8 flex flex-col items-start">
            <img src={BlogPostImage2} alt="Blog Post 2" className="w-80 h-90 object-cover mb-4" />
            <h3 className="text-xl mb-2">Tech Industry Insights</h3>
            <p className="mb-4">
              Gain insights into the ever-evolving tech industry, covering news, innovations, and breakthroughs.
            </p>
            <a href="#blogPost2" className="text-orange-300  hover:underline block">
              Read More
            </a>
          </div>
          <div className="mb-4 md:mb-8 flex flex-col items-start">
            <img src={BlogPostImage3} alt="Blog Post 3" className="w-80 h-90 object-cover mb-4" />
            <h3 className="text-xl mb-2">Developer Tips & Tricks</h3>
            <p className="mb-4">
              Discover handy tips and tricks for developers to enhance your coding and problem-solving skills.
            </p>
            <a href="#blogPost3" className="text-orange-300 hover:underline block">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPosts;
