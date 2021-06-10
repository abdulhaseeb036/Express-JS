
// TO USE HBS HBS IS USE FOR DYNAMIC DATA TO RENDER IN WEB PAGE.
// FOR THIS WE INSTALL OR IMPORT IT AND THEN MAKE A FOLDER AND THEN FILE WITH 
// THE NAME OF views ---> index.hbs.. 
// so in the same folder we have and other folder and file the name of
// (any folder) --> js file.. IN THIS FILE WE ADD EXPRESS NODE CODE AND SET OUR VIEW ENGINE
// AND SET OUR SERVER ALSO WE ABLE TO PASS A DATA AS A PROB IN RENDER AS AN OBJECT.


const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const dynamicPath = path.join(__dirname, '../src/templates/views');
const partialPath = path.join(__dirname, '../src/templates/partials');
// set view engine, which is hbs in view folder it automatically read it in express.
app.set('view engine','hbs');
app.set("views", dynamicPath)  //set views path my our self
hbs.registerPartials(partialPath)


// get in index,hbs in res and secomnd is for dynamic name -> haseeb it wors as a prop or state.
app.get("/", (req, res) => {
    res.render('index', {
        name: "haseeb alam",
    });
})
app.get("/about", (req,res) => {
    res.render("about")
})

app.get("/about/*", (req,res) => {
    res.render("404page", {
        errorPage: "oop's page not find"
    })
})

app.get("*", (req,res) => {
    res.render("404page", {
        errorPage: "oop's page not find"
    })
})

// listen the server..
app.listen("5000", () => {
    console.log("listening hbs dynamic html with port 4000");
})