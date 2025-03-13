const express = require("express");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.js
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

app.get("/", (req, res) => {
  res.render("index", { links: links });
});



app.get('/:name', function (req, res, next) {
  let options = {
    root: path.join(__dirname,),
    
  }
  let fileName = req.params.name + ".html";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Port listening");
});