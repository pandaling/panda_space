import { Request, Response } from 'express';
import { cacheCicumference, cachePi } from "../utils/measurements";

export const SpaceController = (req: Request, res: Response) => {
  res.send({ success: true, data: { pi: cachePi, circumference: cacheCicumference } });
};
