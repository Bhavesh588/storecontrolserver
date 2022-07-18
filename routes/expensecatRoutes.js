const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res)=>{
    db.Expense_categories.findAll().then((cat)=>res.send(cat))
})

router.post("/new", (req, res) => {
  db.Expense_categories.create({ nombre: req.body.nombre }).then(
    (submittedExpensecat) => res.send(submittedExpensecat)
  );
});

module.exports = router;
