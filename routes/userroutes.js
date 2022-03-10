const express = require("express");

const userrouter = express.Router();

const userController = require("../controllers/userController");
// const rentController = require("../controllers/rentController");
// const userController = require("../controllers/userController");

userrouter.post("/", userController.create);
userrouter.post("/:id",userController.login)
// router.get("/:id", bookController.findOne);
// router.delete("/:id", bookController.delete);
// router.put("/:id", bookController.update);

// router.post("/",rentController.create);

// router.post("/",userController.create);

module.exports = userrouter;