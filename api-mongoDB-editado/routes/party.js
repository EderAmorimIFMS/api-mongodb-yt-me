const express = require("express");
const routes = express.Router()
const partyController = require("../controllers/partyController");

routes.post("/parties", partyController.createParty);
routes.get("/parties", partyController.getAllParty);
routes.get("/parties/:id", partyController.getOneParty);
routes.delete("/parties/:id", partyController.deleteParty);
routes.put("/parties/:id", partyController.updatedParty)

module.exports = routes;