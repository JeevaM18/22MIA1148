const { computeSchedule } = require("../services/schedulerService");
const Log = require("../../logging_middleware/logger");

const getSchedule = async (req, res) => {
    await Log("backend", "info", "controller", "Schedule API called");

    const result = await computeSchedule();

    res.json(result);
};

module.exports = { getSchedule };
