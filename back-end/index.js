const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const categories = require("./data/categories.json");
const allNews = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/all-news", (req, res) => {
  res.send(allNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
