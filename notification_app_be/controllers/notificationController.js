const { getTopNotifications } = require("../services/notificationService");
const Log = require("../../logging_middleware/logger");

const getNotifications = async (req, res) => {
    await Log("backend", "info", "controller", "Notif API hit");

    const data = await getTopNotifications();

    res.json(data);
};

module.exports = { getNotifications };
