// KqxJalmylr5ACXGY
// mongodb+srv://nabarajbhandari:<db_password>@cluster0.i5onl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const connectDB = require("./db.js");
const app = express();
const PORT = 5000;
const cors = require("cors");

const itemModel = require("./models/articleSchema.js");

app.use(express.json());
app.use(cors());
connectDB();

app.get("/", async (req, res) => {
  const response = await itemModel.find();
  return res.json(response);
});

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
