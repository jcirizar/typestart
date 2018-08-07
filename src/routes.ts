import {Router} from "express";
import calculations from './modules/calculations'

const routes: Router = Router();

routes.use('/api', calculations);

export default routes;
