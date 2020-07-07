const express = require('express');
const app = express();

app.use(express.static('src/static'));

app.listen(8810, console.log('listening at http://localhost:8810'));
