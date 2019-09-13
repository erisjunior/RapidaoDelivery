const express = require('express');
const routes = express.Router();

const CityController = require('./controllers/CityController')
const StateController = require('./controllers/StateController')

routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update);
routes.delete('/cities/:id', CityController.destroy);

routes.get('/states', StateController.index);
routes.get('/states/:id', StateController.show);
routes.post('/states', StateController.store);
routes.put('/states/:id', StateController.update);
routes.delete('/states/:id', StateController.destroy);

module.exports = routes;