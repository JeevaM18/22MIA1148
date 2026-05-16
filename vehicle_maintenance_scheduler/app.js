const express = require("express");
const cors = require("cors");
const loggingMiddleware = require("../logging_middleware/middleware");
const schedulerRoutes = require("./routes/schedulerRoutes");
const Log = require("../logging_middleware/logger");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

app.use("/api", schedulerRoutes);

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", async (req, res) => {
    await Log("backend", "info", "controller", "Root hit");
    res.send("Vehicle Scheduler Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
