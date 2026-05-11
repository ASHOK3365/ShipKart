import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
      error: err
    });
  } else {
    // Production: Don't leak error details
    if (err.isOperational) {
      res.status(err.statusCode).json({
        success: false,
        message: err.message
      });
    } else {
      console.error('ERROR 💥', err);
      res.status(500).json({
        success: false,
        message: 'Something went very wrong!'
      });
    }
  }
};
