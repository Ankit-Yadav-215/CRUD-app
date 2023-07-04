const routes = require('./Routes/Routes');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use('/api', routes)
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})