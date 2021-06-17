'use strict';

const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routes/food.js');
const carRoutes = require('./routes/car.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use(foodRoutes);
app.use(carRoutes);

module.exports = {
    app: app,
    start: (PORT) => {
        app.listen(PORT, () => console.log('app is running'));
    }
}