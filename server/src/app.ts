import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'express';
import helmet from 'helmet';
import logger from './utils/logger';
import cookieParser from 'cookie-parser';

import corsMiddleware from 'cors';
import rateLimit from 'express-rate-limit';
import { errorMiddleware } from './middleware/error.middleware';

import authRoutes from './routes/auth.routes';
import aiRoutes from './routes/ai.routes';

const app: Application = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);


// Standard Middleware
app.use(helmet());
app.use(corsMiddleware({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Request Logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/ai', aiRoutes);

// Base Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Antigravity API is healthy and soaring!',
    timestamp: new Date().toISOString()
  });
});

// Error Handling
app.use(errorMiddleware);

export default app;
