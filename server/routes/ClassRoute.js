const express = require("express");
const AddClassController = require("../controllers/AddClassController");


const router = express.Router();

// Post

router.post("/addClass", AddClassController.addClass)

// Get

router.get("/ClassDetails", AddClassController.ClassDetails)

// Get by id

router.get("/getClass/:id", AddClassController.getClass)

// Delete

router.delete("/deleteClass/:id", AddClassController.deleteClass)

// Put

router.put("/editClass/:id", AddClassController.editClass)


module.exports = router;