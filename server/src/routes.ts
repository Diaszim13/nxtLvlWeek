import express from 'express';
import pointsControllers from './controllers/pointsController';
import itemsControllers from './controllers/itemsController';

const routes = express.Router();
const PointsControllers = new pointsControllers;
const ItemsController = new itemsControllers;

routes.get('/items', ItemsController.index);

routes.post('/points', PointsControllers.create);

routes.get('/points/:id', PointsControllers.show);

routes.get('/points', PointsControllers.index);
export default routes;