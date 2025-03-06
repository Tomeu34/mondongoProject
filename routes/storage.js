const express = require("express")
const router = express.Router()
const {uploadMiddleware, uploadMiddlewareMemory} = require("../utils/handleStorage")

const { getItems, createItem, updateItem, deleteItem, updateImage } = require("../controllers/storage.js")

router.get("/", getItems)

router.post("/:local", createItem)

router.put("/", updateItem)

router.delete("/:filename", deleteItem)

//hasta aquí
router.post("/", uploadMiddleware.single("image"), createItem)

router.patch("/", uploadMiddlewareMemory.single("image"), updateImage)

module.exports = router