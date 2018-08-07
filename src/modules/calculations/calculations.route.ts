import {Router} from "express";
import {addition} from './calculations.controller';

const routes: Router = Router();

routes
  .get('/addition', addition);

export default routes;
