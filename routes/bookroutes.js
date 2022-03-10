const express = require("express");

const bookrouter = express.Router();

const bookController = require("../controllers/bookController");
// const rentController = require("../controllers/rentController");
// const userController = require("../controllers/userController");

bookrouter.post("/", bookController.create);
bookrouter.get("/",bookController.findAll)
bookrouter.get("/:id", bookController.findOne);
bookrouter.delete("/:id", bookController.delete);
bookrouter.put("/:id", bookController.update);

// router.post("/",rentController.create);

// router.post("/",userController.create);

module.exports = bookrouter;
