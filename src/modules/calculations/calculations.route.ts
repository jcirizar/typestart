import {Router} from "express";
import {addition, subtraction} from './calculations.controller';

const routes: Router = Router();

routes
  .get('/addition', addition)
  .get('/subtraction', subtraction);

export default routes;
