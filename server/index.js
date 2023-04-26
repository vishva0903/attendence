const express = require('express');
const app = express();
const connect = require('./mongodb/config');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require('body-parser');
// const routes = require('./routes/StudentRoutes');

const StudentRoutes = require('./routes/StudentRoutes');

dotenv.config()

const PORT = process.env.PORT
connect();

app.use(bodyparser.json());
app.use(cors());
// app.use(routes);

app.use("/StudentRoutes", StudentRoutes);

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) })