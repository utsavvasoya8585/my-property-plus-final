const express = require("express");
const Property = require("../models/Property");
const router = express.Router();

// Add Property Data
router.post("/addproperty", async (req, res) => {
  const { featured, name, floor, facing, price, propertySize, propertyDes, address, images, bedrooms, bathrooms,status, balcony, fStatus, category, gatedSecurity, lift, parking, veg, pets, features, googleLocation } = req.body;
  try {
    const propertyDoc = await Property.create({
      featured, name, floor, facing, price, propertySize, propertyDes, address, images, bedrooms, bathrooms,status, balcony, fStatus, category, gatedSecurity, lift, parking, veg, pets, features, googleLocation
    });
    res.json(propertyDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// UPDATE
router.put(`/update/:id`, async (req, res) => {
  const id = req.params.id;
  const propertyUpdate = req.body;
  const propertyDoc = await Property.findById(id);
  // console.log(designDoc.noOfFloor);
  propertyDoc.set(propertyUpdate);
  // console.log(designDoc.noOfFloor);
  try {
    await propertyDoc.save();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
  // console.log(designDoc);
});

// Get already added property using: ID
router.get("/getproperty/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const propertyDoc = await Property.find({_id: id});
    res.json(propertyDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// get all the added properties
router.get("/getproperty", async (req, res) => {
  try {
    const allProperty = await Property.find({});
    res.json(allProperty);
    // console.log(allProperty);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// get features properties
router.get("/getfeaturesproperty", async(req, res) => {
  try {
    const propertyDoc = await Property.find({featured: true});
    // console.log(propertyDoc)
    res.json(propertyDoc);
  }catch(e){
    res.status(422).json(e);
  }
})

// Delete
router.delete(`/delete/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(id);
    await Property.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

module.exports = router;
