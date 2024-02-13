const BlogPost = ({ title, video, content, link }) => {
  return (
    <div className="mb-4 md:mb-8 flex flex-col items-start">
      <video autoPlay muted loop className="w-full h-full mb-4">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="mb-4">{content}</p>
      <a href={link} className="text-orange-300 hover:underline block">
        Read More
      </a>
    </div>
  );
};

export default BlogPost;
