import * as bodyParser from 'body-parser';
import * as compression from 'compression'; // compresses requests
import * as config from 'config';
import * as express from 'express';
import {Express} from 'express';
import * as helmet from 'helmet';
import routes from './routes';

const app: Express = express();
const port = process.env.PORT || config.get('port');

app
  .use(helmet())
  .use(compression())
  .use(bodyParser.json())
  .use('/', routes)
  .listen(port, () => {
    console.log(`|=> Listening on port : ${port}`);
    console.log(`|=> NODE_ENV equal    : ${process.env.NODE_ENV}`);
  });

export default app;
