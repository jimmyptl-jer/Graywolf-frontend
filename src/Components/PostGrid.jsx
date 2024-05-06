import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext'
import * as apiClient from '../http.js'

const PostGrid = () => {
  const { showToast } = useAppContext();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const fetchedPost = await apiClient.getAllPost();
        setPost(fetchedPost);
      } catch (error) {
        showToast({ message: "Failed to fetch posts", type: "ERROR" });
      }
    };

    fetchBusinesses();
  }, [showToast]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
      {posts.map(post => (
        <div key={post._id} className="flex flex-col border-l-4 border border-slate-700 transition duration-300 transform hover:scale-105 hover:border-orange-300 hover:text-white shadow-md p-4">
          <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover mb-4 rounded-md" />
          <h2 className="text-xl text-orange-300 mb-2">{post.title}</h2>
          <p className="text-gray-300 mb-4">{post.description}</p>
          <div className="flex justify-between">
            <Link
              to={post.videoLink}
              className="flex items-center  transition duration-300 py-2 hover:border-b"
            >
              Watch Video
            </Link>

            <Link
              to={post.blogLink}
              className="flex items-center  transition duration-300 py-2 hover:border-b"
            >
              Read Blog
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
