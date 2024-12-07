// src/components/Highlight.jsx
import React from "react";

const highlightData = {
  title: "Mastering React Hooks",
  description:
    "Discover how to make the most out of React Hooks and write cleaner, more efficient components.",
  author: "Jane Doe",
  date: "April 27, 2024",
  imageUrl: "https://random.imagecdn.app/400/250", // Placeholder image
};

const Highlight = () => {
  return (
    <section className="bg-white py-12 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Image on the left */}
        <img
          src={highlightData.imageUrl}
          alt={highlightData.title}
          className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-8"
        />

        {/* Blog details on the right */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {highlightData.title}
          </h2>
          <p className="text-gray-600 mb-4">{highlightData.description}</p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Author:</strong> {highlightData.author}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Date:</strong> {highlightData.date}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
