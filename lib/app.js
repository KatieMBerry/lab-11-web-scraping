const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
