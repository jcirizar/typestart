import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import routes from './routes';
import {Express} from "express";

const app: Express = express();
const port = process.env.PORT || 9000;

app
  .use(compression())
  .use(bodyParser.json())
  .use('/', routes)
  .use(routes)
  .listen(port, () => console.log(`Listening on port ${port}`));

export default app;
