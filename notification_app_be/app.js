const express = require("express");
const cors = require("cors");
const loggingMiddleware = require("../logging_middleware/middleware");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

// Routes
app.use("/api", notificationRoutes);

app.get("/", (req, res) => {
    res.send("Notification Service Running");
});

app.listen(4000, () => {
    console.log("Notification service running on port 4000");
});
