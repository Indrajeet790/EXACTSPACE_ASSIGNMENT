const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8000;
const log = require("./filesync/largestfile");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//using ejs 
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));

app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// route to access form
app.get("/", (req, res) => {
  return res.render("form", { parsedData: null });
});
var jsonInput = null;
// route for submit json data
app.post("/submit-json", (req, res) => {
  jsonInput = req.body.jsonInput;
  const parsedData = JSON.parse(jsonInput);
  return res.render("display_json", { parsedData });
});

// route to display json as form
app.get("/jsonAsForm", (req, res) => {
  const parsedData = JSON.parse(jsonInput);
  return res.render("view_data", { parsedData });
});

app.listen(PORT, (err) => {
    if (err) {
      console.log("error to run server");
    } else {
      console.log(`server is running on port ${PORT}`);
    }
  });