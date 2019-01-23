const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
let connection = require("../config/connection.js");


router.get("/", (req, res) => {
    
    connection.query("SELECT * FROM burgers", function (err, data) {
        
        if (err) {
            return res.status(500).end();
        }

        res.render("index", {burger:data})

    })
})




module.exports = router;