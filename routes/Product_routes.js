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
router.post("/add", (req, res) => {
  const { Id, name, price, categoryName } = req.body;

  // Create category if dosen't exists
  if (
    !database.categories.find((item) => {
      item.name === categoryName;
    })
  ) {
    let newCategory = { name: categoryName, Id: uuidv4() };
    database.categories.push(newCategory);

    // Create a product and add it
    const newProduct = { Id: uuidv4(), name, price, category: categoryName };
    database.products.push(newProduct);
  } else {
    const newProduct = { Id: uuidv4(), name, price, category: categoryName };
    database.products.push(newProduct);
  }
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

// DELETE route

// PUT delete
module.exports = router;
