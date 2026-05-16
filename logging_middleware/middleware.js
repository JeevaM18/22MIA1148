const Log = require("./logger");

const loggingMiddleware = (req, res, next) => {
    const start = Date.now();

    const requestId = Math.random().toString(36).substring(7);
    req.requestId = requestId;

    res.on("finish", () => {
        const duration = Date.now() - start;

        let level = "info";
        if (res.statusCode >= 400 && res.statusCode < 500) level = "warn";
        if (res.statusCode >= 500) level = "error";

        const message = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms | reqId=${requestId}`;

        Log("backend", level, "route", message)
            .catch(err => {
                console.error("Logging failed:", err.message);
            });
    });

    next();
};

module.exports = loggingMiddleware;