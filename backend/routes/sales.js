const express = require("express");
const Sales = require("../models/Sales");
const router = express.Router();

// Add Sales Data
router.post("/addsale", async (req, res) => {
  const { designId, userId, addOns } = req.body;
  try {
    const saleDoc = await Sales.create({
      designId,
      userId,
      addOns,
    });
    res.json(saleDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// Get all sales data : getdata
router.get("/getsale/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const saleDoc = await Sales.find({ designId: id }).count();
    res.json(saleDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

module.exports = router;
