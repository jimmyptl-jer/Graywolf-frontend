const BlogPost = ({ title, image, content, link }) => {
  return (
    <div className="mb-4 md:mb-8 flex flex-col items-start">
      <img src={image} alt={title} className="w-50 h-50 object-cover mb-4" />
      <h3 className="text-xl mb-2">{title}</h3>
      {/* <p className="mb-4">{content}</p> */}
      <a href={link} className="text-orange-300 hover:underline block">
        Read More
      </a>
    </div>
  );
};

export default BlogPost