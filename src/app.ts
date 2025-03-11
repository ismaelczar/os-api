import Express from 'express';
import cors from 'cors';
import { routes } from './routes';

import uploadConfig from './config/upload'
import './database';


export const app = Express();

app.use(Express.json());
app.use(cors());
app.use('/', routes);
app.use('/files', Express.static(uploadConfig.directory))
