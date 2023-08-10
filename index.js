const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts=require("express-ejs-layouts")
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.get('/', (req, res) => {
  res.render('form', { parsedData: null });
});

let jsonInput = null; 
 
app.post('/submit-json', (req, res) => {
    jsonInput = req.body.jsonInput;
    const parsedData = JSON.parse(jsonInput); 
    res.render("display_json" , { parsedData });
  });

app.get('/json', (req, res) => {
    const parsedData = JSON.parse(jsonInput); 
    res.render("view_data" , { parsedData });
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
