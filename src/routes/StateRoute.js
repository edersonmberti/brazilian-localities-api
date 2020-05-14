const express = require("express");
const StateController = require("../controllers/StateController");

const routes = express.Router();

routes.get("/:id", StateController.index);
routes.get("/", StateController.show);

module.exports = routes;
