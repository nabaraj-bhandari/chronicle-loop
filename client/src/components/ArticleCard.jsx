import React, { useState } from "react";

const ArticleCard = ({ title, description, author, date, imageUrl }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="p-4 bg-white dark:bg-gray-800 h-full flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By {author}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              ❤️ <span className="ml-1">{likes}</span>
            </button>

            {/* Share Button */}
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              🔗
            </button>
          </div>
        </div>
        <button className="mt-4 w-full text-blue-500 hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
