const express = require('express');
const router = require('./Routes/todoRouter');
const { connectToMongo } = require('./connect');

const app = express();      // create an express server
app.use(express.json());    // to convert the req body into JSON
connectToMongo();           // Build a connection with Mongo DB

app.use('/todoAPI', router);       // Middleware :- Used for Routing purpose

app.listen(4000, () => console.log('Server is running on port - 4000'));