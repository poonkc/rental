const express = require("express");

const receiptrouter = express.Router();

const receiptController = require("../controllers/receiptController");
// const rentController = require("../controllers/rentController");
// const userController = require("../controllers/userController");

receiptrouter.post("/", receiptController.create);
// rentrouter.get("/",rentController.findAll)
// rentrouter.get("/:id", rentController.findbyuserID);
// router.delete("/:id", bookController.delete);
// router.put("/:id", bookController.update);

// router.post("/",rentController.create);

// router.post("/",userController.create);

module.exports = receiptrouter;