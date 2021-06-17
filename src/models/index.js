'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const NODE_ENV = process.env.DATABASE_URL

const { Sequelize, DataTypes} = require('sequelize');
const foodModel = require('./food.js');
const carModel = require('./car.js');

let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}: {});

const food = foodModel(sequelize, DataTypes);
const car = carModel(sequelize, DataTypes);

module.exports = {
    db: sequelize, 
    food: food,
    car: car,
}