// import articleRouter from "./routes/articles";
const articleRouter = require("./routes/articles");
const express = require("express");

const app = express();
const port = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(port);
console.log(`App is listining to ${port}`);
