//import
const express = require("express");
const path = require("path");

//instance
const router = express.Router();

//CRUD
// sendFile() that can be used to serve static files (home.html).
//__dirname : create a new directory.
router.get("/contact", (req, res, next) => {
    res.status(200).sendFile(
        path.join(__dirname, "..", "HTMLfolder", "Contact_us.html")
    );
});
//export
module.exports = router;
