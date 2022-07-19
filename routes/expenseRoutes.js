const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/", (req, res)=>{
    db.Expense_master.findAll().then((expense)=>res.send(expense))
})
router.post("/new", (req, res)=>{
    db.Expense_master.create(req.body).then((submittedExpense)=> res.send(submittedExpense))
})

module.exports = router;