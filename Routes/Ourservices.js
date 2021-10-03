//import
const express = require('express');
const path = require ('path');

//instance
const router = express.Router();
 
//CRUD
// sendFile() that can be used to serve static files (home.html).
//__dirname : create a new directory.
router.get('/services', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'HTMLfolder', 'Our_services.html'))
});
//export 
module.exports =router;