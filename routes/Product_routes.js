const database = require("../database/db");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

// GET routes
router.get("/all", (req, res) => {
  try {
    res.json({
      products: database.products,
      message: `Products fetched sucessfully`,
      status: `SUCCESS`,
    });
  } catch (err) {
    res.json({
      products: [],
      message: err.message,
      status: `FAILED`,
    });
  }
});

// POST route
router.post("/post", (req, res) => {
  const { Name, Price, Categotry } = req.body;

  try {
    res.json({
      products: database.products,
      message: `Products fetched sucessfully`,
      status: `SUCCESS`,
    });
  } catch (err) {
    res.json({
      products: [],
      message: err.message,
      status: `FAILED`,
    });
  }
});

module.exports = router;
