const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('./config/connection');
const api_user_routes = require('./routes/api/userRoutes');
const api_thought_routes = require('./routes/api/thoughtRoutes')


const app = express()
require('./modules/seed');

app.use(express.json());

app.use('/user', api_user_routes);
app.use('/thought', api_thought_routes);

const port=3000;

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
});