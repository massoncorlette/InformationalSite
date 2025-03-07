const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile('Repos/InformationalSite/index.html'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Port listening");
})