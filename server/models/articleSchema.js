const mongoose = require("mongoose");

// Define the schema for the articles
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// Create a model based on the schema
const Article = mongoose.model("articles", articleSchema);

module.exports = Article;
