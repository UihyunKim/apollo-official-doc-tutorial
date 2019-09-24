const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/static"));

app.listen(3000, () => {
  console.log("Server is up on 3000...");
});
