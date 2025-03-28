import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import debug from 'debug';

import testRoute from './api/routes/testRoutes.js';
import userRoute from './api/routes/UserRoute.js';

dotenv.config();
debug.enable(process.env.DEBUG); // enable DEBUG from .env

const startup = debug('startup');
const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(dirname, '/public')));
app.use(express.json());

app.use('/test', testRoute);
app.use('/', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => startup(`Server is running on port ${PORT}`));

export default app;
