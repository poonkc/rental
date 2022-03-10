const express = require("express");

const rentrouter = express.Router();

const rentController = require("../controllers/rentController");
// const rentController = require("../controllers/rentController");
// const userController = require("../controllers/userController");

rentrouter.post("/", rentController.create);
rentrouter.get("/",rentController.findAll)
rentrouter.get("/:id", rentController.findbyuserID);
// router.delete("/:id", bookController.delete);
// router.put("/:id", bookController.update);

// router.post("/",rentController.create);

// router.post("/",userController.create);

module.exports = rentrouter;