const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'public'),
    
  }

  if (!(req.params.name)) {
    res.sendFile('index.html');
  }

  let fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Port listening");
})