const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
const { readdirSync } = require("fs");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const loggingMiddleware = require("./middlewares/loggingMiddleware");
const { checkUser } = require("./middlewares/authMiddleware");
const rateLimitMiddleware = require("./middlewares/rateLimitMiddleware");
const errorHandler = require("./utils/errorHandler");

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // Specify the origin of your frontend application
    credentials: true, // Allow credentials (cookies, etc.) to be sent with the request
  })
);
app.use(helmet());
app.use(errorHandler);
app.use(rateLimitMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggingMiddleware);
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

// Routes
app.get("*", checkUser);

readdirSync("./routes").map((route) => {
  const currentRoute = require(`./routes/${route}`);
  app.use("/api", currentRoute);
});

module.exports = app;
