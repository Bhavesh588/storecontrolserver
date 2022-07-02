const express = require("express");
const router = express.Router();
const db = require("../models");

// All Product Data
router.get("/", (req, res) => {
    db.Products_data.findAll().then((product) => res.send(product));
});

// Insert Product
router.post("/new", (req, res) => {
    db.Products_data.create(req.body).then((submittedProduct) =>
        res.send(submittedProduct)
    );
});

// Update Product
router.put("/edit", (req, res) => {
    db.Products_data.update(req.body, {
        where: {
            Product_id: req.body.Product_id,
        },
    }).then(() => res.send("successfully Updated"));
});

// Delete Product
router.delete("/delete/:id", (req, res) => {
    db.Products_data.destroy({
        where: {
            Product_id: req.params.id,
        },
    }).then(() => res.send("success"));
});

module.exports = router;
