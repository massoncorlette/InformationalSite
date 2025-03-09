const express = require("express");
const path = require("path");
const app = express();

app.get('/:name', function (req, res, next) {
  let options = {
    root: path.join(__dirname, ),
    
  }
  let fileName = req.params.name + ".html";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Port listening");
});