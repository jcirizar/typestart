import {Request, Response, Router} from 'express';
import {routes as calcRoutes} from './modules/calculations';

const routes: Router = Router();


routes.use('/', calcRoutes);

export default routes;
