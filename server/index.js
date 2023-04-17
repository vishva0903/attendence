const express = require('express');
const app = express();
const connect = require('./mongodb/config');
connect();

app.listen(PORT, () => {console.log(`Server started at ${PORT}`)})