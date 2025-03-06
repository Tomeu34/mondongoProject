const express = require("express")
const router = express.Router()
const { validatorCreateItem } = require("../validators/users")
const customHeader = require("../middleware/customHeader")
const authMiddleware = require("../middleware/session")

const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/users")

router.get("/", authMiddleware ,getItems)

router.get("/:email", getItem)

router.post("/", validatorCreateItem, customHeader, createItem)

router.put("/", updateItem)

router.delete("/:email", deleteItem)

module.exports = router