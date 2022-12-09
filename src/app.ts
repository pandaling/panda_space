import express, { Application } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { Routes } from './routes';
import { calculateCircumference, calculatePI } from './utils/measurements';

const PORT_FE = process.env.PORT_FE || 8210;

const app: Application = express();

let corsOptions = {
  origin: `http://localhost:${PORT_FE}`,
};

app.use(compression());
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For testing purpose
Routes(app);
countPeriodically();

export default app;

function countPeriodically() {
  let counter = 0;
  setInterval(() => {
    let pi = calculatePI(counter);
    let circumference = calculateCircumference(pi);

    if (counter === 30) {
      counter = 0;
    } else {
      ++counter;
    }
  }, 5000);
};
