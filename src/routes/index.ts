import { Application } from 'express';
import { Space } from './space';

export const Routes = (app: Application) => {
  app.use('/spaceY', Space());
};
