const axios = require("axios");
const { getAuthToken } = require("./auth");
const { BASE_URL } = require("./config");
const retry = require("./retry");

const VALID_STACK = ["backend", "frontend"];
const VALID_LEVEL = ["debug", "info", "warn", "error", "fatal"];

const Log = async (stack, level, pkg, message) => {
    try {
        if (!VALID_STACK.includes(stack)) {
            throw new Error(`Invalid stack: ${stack}`);
        }

        if (!VALID_LEVEL.includes(level)) {
            throw new Error(`Invalid level: ${level}`);
        }

        if (!pkg || !message) {
            throw new Error("Package and message are required");
        }

        let token = await getAuthToken();

        const formattedMessage = message.length > 48
            ? message.substring(0, 48)
            : message;

        const sendLog = async () => {
            return await axios.post(
                `${BASE_URL}/logs`,
                {
                    stack,
                    level,
                    package: pkg,
                    message: formattedMessage
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    timeout: 5000
                }
            );
        };

        let response;
        try {
            response = await retry(sendLog);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                console.log("Token expired, refreshing...");

                token = await getAuthToken(); 

                response = await retry(sendLog);
            } else {
                throw err;
            }
        }

        
        console.log("Log sent:", {
            stack,
            level,
            pkg,
            message
        });

        return response.data;

    } catch (err) {
        console.error("Log Error:");
        console.error("Message:", err.message);

        if (err.response) {
            console.error("Status:", err.response.status);
            console.error("Data:", err.response.data);
        }

        return null; 
    }
};

module.exports = Log;