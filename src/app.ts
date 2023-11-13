import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './app/routes/index'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);
app.use(globalErrorHandler);
app.get('/', (req: Request, res: Response) => {
  res.send('Travel Itinerary applicationh running succesfully ');
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;