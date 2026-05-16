require("dotenv").config();

module.exports = {
    BASE_URL: "http://4.224.186.213/evaluation-service",
    credentials: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        rollNo: process.env.ROLL_NO,
        accessCode: process.env.ACCESS_CODE,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }
};
