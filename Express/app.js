const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
