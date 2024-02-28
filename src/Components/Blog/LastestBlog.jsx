import BlogPost from "./BlogPost";

import BlogPostImage1 from '../../assets/Blog-3.png';
import BlogPostImage2 from '../../assets/Jenkins.png';
import BlogPostImage3 from '../../assets/NodeJS.png';

const LatestBlogPosts = () => {

  const posts = [
    {
      title: "A Guide to Containerizing a MERN Stack Application",
      image: BlogPostImage1,
      content: "Stay updated with the latest trends in the software world and discover what's shaping the industry.",
      link: "https://medium.com/@jimmyptl46/a-guide-to-containerizing-a-mern-stack-application-dd8c647d2b78"
    },
    {
      title: "Building CI/CD pipeline for MERN Application with Jenkins as a Junior Software Developer",
      image: BlogPostImage2,
      content: "Gain insights into the ever-evolving tech industry, covering news, innovations, and breakthroughs.",
      link: "https://medium.com/@jimmyptl46/building-ci-cd-pipeline-for-mern-applucation-with-jenkins-as-a-junior-software-developer-cd8b5b5195f2"
    },
    {
      title: "Building API in NodeJs — Understanding MVC & CRUD Operations as a Junior Software Developer",
      image: BlogPostImage3,
      content: "Discover handy tips and tricks for developers to enhance your coding and problem-solving skills.",
      link: "https://medium.com/@jimmyptl46/building-api-in-nodejs-understanding-mvc-crud-operations-as-a-junior-software-developer-905e1b1e46fc"
    }
  ];

  return (
    <div className='md:m-8'>
      <div className="container mx-auto justify-between shadow-md">
        <h2 className="text-lg  mb-10 text-orange-300">LATEST BLOG POSTS</h2>
        <p className="text-2xl md:text-4xl lg:text-6xl mb-6">
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