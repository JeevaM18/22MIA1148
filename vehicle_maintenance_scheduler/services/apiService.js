const axios = require("axios");
const { getAuthToken } = require("../../logging_middleware/auth");
const Log = require("../../logging_middleware/logger");

const BASE_URL = "http://4.224.186.213/evaluation-service";

const fetchDepots = async () => {
    const token = await getAuthToken();

    const res = await axios.get(`${BASE_URL}/depots`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    await Log("backend", "info", "service", "Fetched depots");
    return res.data.depots;
};

const fetchVehicles = async () => {
    const token = await getAuthToken();

    const res = await axios.get(`${BASE_URL}/vehicles`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    await Log("backend", "info", "service", "Fetched vehicles");
    return res.data.vehicles;
};

module.exports = { fetchDepots, fetchVehicles };
