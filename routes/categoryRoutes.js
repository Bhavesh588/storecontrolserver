const express = require("express");
const router = express.Router();
const db = require("../models");

// All Category Data
router.get("/", (req, res) => {
    db.Categories.findAll().then((category) => res.send(category));
});

// Insert Category
router.post("/new", (req, res) => {
    db.Categories.create({
        nombre: req.body.nombre,
    }).then((submittedProduct) => res.send(submittedProduct));
});

module.exports = router;
