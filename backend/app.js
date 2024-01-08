
const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const app = express();


//middlewares 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes 
readdirSync('./routes').map((route) => {
  const currentRoute = require(`./routes/${route}`);
  app.use('/tbn', currentRoute);
});

module.exports = app;


