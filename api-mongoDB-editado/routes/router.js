const express = require("express");
const routes = express.Router()

// Services router
const servicesRouter = require("./services");
routes.use("/", servicesRouter);

// Parties routes 
const partyRouter = require("./parties");
routes.use("/", partyRouter);

module.exports = routes;

