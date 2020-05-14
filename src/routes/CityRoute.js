const express = require("express");
const CityController = require("../controllers/CityController");

const routes = express.Router();

routes.get("/", CityController.index);

module.exports = routes;
