import Express from 'express';
import cors from 'cors';
import { routes } from './routes';

import './database';
import 'reflect-metadata';

export const app = Express();

app.use(Express.json());
app.use(cors());
app.use('/', routes);
