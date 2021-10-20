const database = require("../database/db");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

// GET route
router.get("/all", (req, res) => {
  try {
    res.status(200).json({
      categories: database.categories,
      message: `categories fetched sucessfully`,
      status: `SUCCESS`,
    });
  } catch (error) {
    res.JSON({
      categories: [],
      message: err.message,
      status: `FAILED`,
    });
  }
});

// POST route
router.post("/add", (req, res) => {
  const { name } = req.body;
  let newCategory = {
    id: uuidv4(),
    name,
  };
  try {
    let includes = database.categories.find((item) => {
      return item.name === name;
    });
    if (!includes) {
      database.categories.push(newCategory);
    } else {
      console.log(`Already exists!!!`);
    }
    res.status(200).json({
      categories: database.categories,
      message: `categories posted sucessfully`,
      status: `SUCCESS`,
    });
  } catch (error) {
    res.JSON({
      categories: [],
      message: err.message,
      status: `FAILED`,
    });
  }
});

// DELETE route
router.delete("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    const newCategories = database.categories.filter((item) => item.id !== id);
    database.categories = newCategories;
    console.log(newCategories);

    res.json({
      categories: newCategories,
      message: "Successfully removed category",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    res.json({
      categories: [],
      message: error.message,
      status: "FAILED",
    });
  }
});

// PUT route
/*
router.put("/update", (req, res) => {
  try {
    res.json({
      categories: newCategories,
      message: "Successfully removed category",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    res.json({
      categories: [],
      message: error.message,
      status: "FAILED",
    });
  }
});
*/
// Export
module.exports = router;
