const mongoose = require("mongoose");

const db = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 100000,
            socketTimeoutMS: 450000,
            connectTimeoutMS: 100000,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

module.exports = { db };
