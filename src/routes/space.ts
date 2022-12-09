import { Router } from 'express';
import { SpaceController } from '../controllers/space.controller';

export const Space = () => {
  const router = Router();

  router
    .get('/test', (req, res) => {
      res.send('Yeah!');
    })
    .get('/value', SpaceController);

  return router;
};
