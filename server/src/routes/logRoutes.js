const express = require("express");
const logController = require("../controllers/logController");

const router = express.Router();

router.post("/log", logController.ingestLog);

module.exports = router;
