import BlogPost from "./BlogPost";

import BlogPostImage1 from '../../assets/jimmy.jpg';
import BlogPostImage2 from '../../assets/jimmy.jpg';
import BlogPostImage3 from '../../assets/jimmy.jpg';

const LatestBlogPosts = () => {

  const posts = [
    {
      title: "A Guide to Containerizing a MERN Stack Application",
      image: BlogPostImage1,
      content: "Stay updated with the latest trends in the software world and discover what's shaping the industry.",
      link: "https://medium.com/@jimmyptl46/a-guide-to-containerizing-a-mern-stack-application-dd8c647d2b78"
    },
    {
      title: "Tech Industry Insights",
      image: BlogPostImage2,
      content: "Gain insights into the ever-evolving tech industry, covering news, innovations, and breakthroughs.",
      link: "#blogPost2"
    },
    {
      title: "Developer Tips & Tricks",
      image: BlogPostImage3,
      content: "Discover handy tips and tricks for developers to enhance your coding and problem-solving skills.",
      link: "#blogPost3"
    }
  ];

  return (
    <div className='md:m-8'>
      <div className="container mx-auto justify-between shadow-md">
        <h2 className="text-4xl  mb-6">LATEST BLOG POSTS</h2>
        <p className="text-lg mb-6">
          Explore my thoughts and insights on various topics related to the tech industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPosts;