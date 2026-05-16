const express = require("express");
const router = express.Router();
const Log = require("../logging_middleware/logger");

router.get("/", async (req, res) => {
    await Log("backend", "info", "controller", "Root endpoint hit");
    res.send("API is working");
});

router.get("/error", async (req, res) => {
    throw new Error("Test error triggered");
});

module.exports = router;
