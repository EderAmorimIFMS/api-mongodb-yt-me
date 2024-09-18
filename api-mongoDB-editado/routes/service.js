const express = require("express");
const routes = express.Router()
const serviceController = require("../controllers/serviceController");

routes.post("/services", serviceController.createService);
routes.get("/services", serviceController.getAllService);
routes.get("/services/:id", serviceController.getOneService);
routes.delete("/services/:id", serviceController.deleteService);
routes.put("/services/:id", serviceController.updateService)

module.exports = routes;