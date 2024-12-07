// src/components/ArticleList.jsx
import React, { useState, useEffect } from "react";

import ArticleCard from "../../components/ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000");
      const articles = await res.json();
      setArticles(articles);
    };
    fetchData();
  });
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article._id} // Unique key for each item
            title={article.title} // Passing title prop
            description={article.description} // Passing description prop
            author={article.author} // Passing author prop
            date={article.date} // Passing date prop
            imageUrl={article.imageUrl} // Passing imageUrl prop
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
