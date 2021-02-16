const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const hostname = '0.0.0.0';
const port = process.env.PORT || 8000;


// http://localhost:8000/


//public static path
//how to show public file 
const static_path = path.join(__dirname, "../public"); //path
const template_path = path.join(__dirname, "../templates/views"); //path changing hbs for roitng index,about.hbs page
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing

app.get("", (req, res) => {
    res.render('index')

})
app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/weather", (req, res) => {
    res.render('weather')
})
app.get("/contact", (req, res) => {
    res.render('contact')
})


app.get("*", (req, res) => {
    res.render('404error', {
            errorMsg: 'Oops! Page Not Found'
        })
        // res.send("404 error ! Oops page not found")
})


app.listen(port, () => {
    console.log('listening to port at http://${hostname}:${port}/');

})