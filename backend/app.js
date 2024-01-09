const express = require('express');
const xss = require('xss-clean');
const cors = require('cors');
const helmet = require('helmet')
const { readdirSync } = require('fs');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const loggingMiddleware = require('./middlewares/loggingMiddleware')
const rateLimitMiddleware = require('./middlewares/rateLimitMiddleware')
const i18nMiddleware = require('./locales/i18nMiddleware');
const errorHandler = require('./utils/errorHandler');

const app = express();

//middlewares 
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(errorHandler);
app.use(rateLimitMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(i18nMiddleware);
app.use(loggingMiddleware);
app.use(mongoSanitize());
app.use(xss());

//routes 
readdirSync('./routes').map((route) => {
  const currentRoute = require(`./routes/${route}`);
  app.use('/tbn', currentRoute);
});

module.exports = app;
