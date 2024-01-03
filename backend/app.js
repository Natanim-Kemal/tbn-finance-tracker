
const express = require('express');
const cors = require('cors');
const { db } = require('./db/database');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

//middlewares 
app.use(express.json());
app.use(cors());

//routes 
readdirSync('./routes').map((route) => {
  const currentRoute = require(`./routes/${route}`);
  app.use('/api/v1', currentRoute);
});

const server = () => {  
  
  db()
  app.listen(PORT, () => {
    console.log('Server listening to PORT:', PORT);
  });
};

server();


