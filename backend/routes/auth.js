const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "make-my-ghar";
// ROUTE 1: Register
router.post("/register", async (req, res) => {
  const { fname, lname, email, phone, userType, password } = req.body;
  try {
    const userDoc = await User.create({
      fname,
      lname,
      email,
      phone,
      userType,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// ROUTE 2: Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("Not Found");
  }
});

// ROUTE 3: Fetcch User
router.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const user = await User.findById(userData.id);
      res.json(user);
    });
  } else {
    res.json(null);
  }
});

// ROUTE 4: Logout
router.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

module.exports = router;
