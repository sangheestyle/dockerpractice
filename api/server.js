const express = require('express');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API');
});

app.post('/tenants', (req, res) => {
    res.send({ name: req.body["name"] });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);