const express = require("express");
const router = express.Router();
const db = require("../models");

// All Deposito Data
router.get("/", (req, res) => {
    db.Deposito.findAll().then((deposito) => res.send(deposito));
});

// Insert Deposito
router.post("/new", (req, res) => {
    db.Deposito.create({
        nombre: req.body.nombre,
    }).then((deposito) => res.send(deposito));
});

module.exports = router;
