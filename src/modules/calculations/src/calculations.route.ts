import {Request, Response, Router} from 'express';
import {addition, subtraction} from './calculations.controller';

export const routes: Router = Router();

routes
  .get('/', (req: Request, res: Response) => res.send(`
    <style>
    html {
        height: 100%;
    }
    body {
        min-height: 100%;
        display: grid;
        grid-template: 1fr / 1fr;
        align-items: center;
        justify-items: center;
    }
    </style>
    <body>
        <h1>Working</h1>
    </body>
  `))
  .get('/addition', addition)
  .get('/subtraction', subtraction);

// routes.route('/addition').get(addition).post(createAddition);
