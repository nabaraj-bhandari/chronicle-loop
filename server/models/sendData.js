const mongoose = require("mongoose");
const Article = require("./articleSchema"); // Import your article schema

// Connect to MongoDB (make sure your MongoDB server is running)
mongoose
  .connect(
    "mongodb+srv://nabarajbhandari:KqxJalmylr5ACXGY@cluster0.i5onl.mongodb.net/chronicle-loop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Insert your data here
    const articles = [
      {
        title: "Debugging MongoDB Atlas",
        description:
          "How I learnt to debug errors while working with MongoDB Atlas.",
        author: "Nabaraj Bhandari",
        date: "Mangsir 23, 2081",
        imageUrl:
          "https://www.codigofuente.org/wp-content/uploads/2018/10/mongo.jpg",
      },
    ];

    // Insert articles into the MongoDB database
    Article.insertMany(articles)
      .then(() => {
        console.log("Articles inserted successfully");
        mongoose.connection.close(); // Close the connection after inserting data
      })
      .catch((error) => {
        console.error("Error inserting articles:", error);
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
