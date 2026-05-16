const axios = require("axios");
const { getAuthToken } = require("../../logging_middleware/auth");
const Log = require("../../logging_middleware/logger");

const BASE_URL = "http://4.224.186.213/evaluation-service";

const TYPE_WEIGHT = {
    Placement: 3,
    Result: 2,
    Event: 1
};

const fetchNotifications = async () => {
    const token = await getAuthToken();

    const res = await axios.get(`${BASE_URL}/notifications`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    await Log("backend", "info", "service", "Fetched notif");

    return res.data.notifications;
};

const getTopNotifications = async () => {
    const notifications = await fetchNotifications();

    notifications.sort((a, b) => {
        const wA = TYPE_WEIGHT[a.Type] || 0;
        const wB = TYPE_WEIGHT[b.Type] || 0;

        if (wA !== wB) return wB - wA;

        return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const result = notifications.slice(0, 10);

    await Log("backend", "info", "service", "Top notif done");

    return result;
};

module.exports = { getTopNotifications };
