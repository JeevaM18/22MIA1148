const axios = require("axios");
const { BASE_URL, credentials } = require("./config");

let token = null;

const getAuthToken = async () => {
    if (token) return token;

    try {
        const res = await axios.post(`${BASE_URL}/auth`, credentials);
        token = res.data.access_token;
        return token;
    } catch (err) {
        console.error("Auth Error:", err.message);
    }
};

module.exports = { getAuthToken };
