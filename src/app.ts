import Express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { routes } from './routes';

import './database';

import uploadConfig from './config/upload'
import { AppError } from './erros/AppError';

export const app = Express();

app.use(Express.json());
app.use(cors());
app.use('/', routes);
app.use('/files', Express.static(uploadConfig.directory))

app.use((err: Error, req: Request, res, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})
