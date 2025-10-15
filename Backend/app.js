const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
const cors = require('cors');
app.use(cors());





app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;