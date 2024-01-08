

const app = require('./app');
const { db } = require('./config/database');

require('dotenv').config();
const PORT = process.env.PORT;

const server = () => {

    db()
    app.listen(PORT, () => {
        console.log('Server listening to PORT:', PORT);
    });
};

server();