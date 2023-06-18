const express = require("express");
const router = express.Router();
const Property = require("../models/Property.js");

// Route: 1 Add new design
router.post("/addnew", async (req, res) => {
  const {
    designType,
    mainPage,
    title,
    description,
    noOfFloor,
    keywordsG,
    keywords1,
    keywords2,
    keywords3,
    keywords4,
    keywords5,
    images,
    addonKeywords,
    addonPrice,
    additionalInfo,
    price,
  } = req.body;
  try {
    const designDoc = await Design.create({
      designType,
      mainPage,
      title,
      description,
      noOfFloor,
      keywordsG,
      keywords1,
      keywords2,
      keywords3,
      keywords4,
      keywords5,
      images,
      addonKeywords,
      addonPrice,
      additionalInfo,
      price,
    });
    // res.json(designDoc);
    res.sendStatus(204);
  } catch (e) {
    res.status(422).json(e);
  }
});

// UPDATE
router.put(`/update/:id`, async (req, res) => {
  const id = req.params.id;
  const designUpdate = req.body;
  const designDoc = await Design.findById(id);
  console.log(designDoc.noOfFloor);
  designDoc.set(designUpdate);
  console.log(designDoc.noOfFloor);
  try {
    await designDoc.save();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
  // console.log(designDoc);
});

// ROUTE: 2 Get already added designs
router.get("/getdesign", async (req, res) => {
  try {
    const allDesigns = await Design.find({});
    res.json(allDesigns);
    console.log(allDesigns);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/getdesign/resi", async (req, res) => {
  try {
    const allDesigns = await Design.find({ designType: "0" });
    res.json(allDesigns);
    console.log(allDesigns);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/getdesign/comm", async (req, res) => {
  try {
    const allDesigns = await Design.find({ designType: "1" });
    res.json(allDesigns);
    console.log(allDesigns);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/getdesign/resicomm", async (req, res) => {
  try {
    const allDesigns = await Design.find({ designType: "2" });
    res.json(allDesigns);
    console.log(allDesigns);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/getdesign/villa", async (req, res) => {
  try {
    const allDesigns = await Design.find({ designType: "3" });
    res.json(allDesigns);
    console.log(allDesigns);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/getdesign/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const allDesigns = await Design.find({ _id: id });
    res.json(allDesigns);
    console.log(allDesigns);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// Delete
router.delete(`/deletedesign/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    console.log(id);
    await Design.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

// router.get("/getdesign", async () => {
//   try {
//     const { type } = req.body;
//     const res = await Design.find();
//     res.json(data);
//   } catch (e) {}
// });

module.exports = router;
