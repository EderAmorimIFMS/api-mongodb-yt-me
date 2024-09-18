const express = require("express");
const router = express.Router();
const PictureController = require("../controllers/pictureController");

router.post("/", upload.single("file"), PictureController.create);
router.post("/", PictureController.getAll);
router.post("/:id", PictureController.remove);

module.exports = router;