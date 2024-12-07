// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

const quotes = [
  "The best way to predict the future is to create it.",
  "Writing is the painting of the voice.",
  "Creativity is intelligence having fun.",
  "The pen is mightier than the sword.",
  "The secret of getting ahead is getting started.",
];

const Hero = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{quote}</h1>
        <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
