const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

// Add Blog Data
router.post("/addblog", async (req, res) => {
  const { blogType, title, images, description1, description2 } = req.body;
  try {
    const blogDoc = await Blog.create({
      blogType,
      title,
      images,
      description1,
      description2
    });
    res.json(blogDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// UPDATE
router.put(`/update/:id`, async (req, res) => {
  const id = req.params.id;
  const blogUpdate = req.body;
  const blogDoc = await Blog.findById(id);
  // console.log(designDoc.noOfFloor);
  blogDoc.set(blogUpdate);
  // console.log(designDoc.noOfFloor);
  try {
    await blogDoc.save();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
  // console.log(designDoc);
});

// Get already added blogs using: ID
router.get("/getblog/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const blogDoc = await Blog.find({_id: id});
    res.json(blogDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// get all the added properties
router.get("/getblogs", async (req, res) => {
  try {
    const allBlog = await Blog.find({});
    res.json(allBlog);
    // console.log(allBlog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// Delete
router.delete(`/delete/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(id);
    await Blog.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

module.exports = router;
