const express = require('express');
const app = express();

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page.html'))
});
  

module.exports = app;