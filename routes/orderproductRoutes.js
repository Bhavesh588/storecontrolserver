const express = require("express");
const router = express.Router();
const db = require("../models");
// prettier-ignore
// All Order Data
// router.get("/", (req, res) => {
//     db.Order_product.findAll().then((order) => res.send(order));
// });

// prettier-ignore
// Insert order product
router.post("/new", (req, res) => {
    db.Order_product.bulkCreate(req.body).then((submittedProduct) => res.send(submittedProduct));
});

module.exports = router;
