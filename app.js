 //import
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//routing
const homeRoute = require("./routes/Home");
const ContactusRoute = require("./routes/Contactus");
const OurservicesRoute = require("./routes/OurServices");
const NavbarRoute = require("./routes/Navbar");

const app = express();
//urlencoded: json+utf8
//extended:false: array or string, true : any type.
app.use(bodyParser.urlencoded({ extended: false }));

//Working date
let date = new Date();
let day = date.getDay();
let hours = date.getHours();
if (day > 0 && day < 6 && hours > 9 && hours <= 23) {
    app.use(homeRoute);
    app.use(OurservicesRoute);
    app.use(ContactusRoute);
} else {
    app.use(NavbarRoute);
}

//create server
const port = 4000;
app.listen(port, (error) => {
    error
        ? console.log(error)
        : console.log(`server is running on port ${port} `);
});
