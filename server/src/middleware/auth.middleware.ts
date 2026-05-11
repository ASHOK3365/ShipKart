import { Request, Response, NextFunction } from 'express';
import User, { UserRole } from '../models/user.model';
import { AppError } from './error.middleware';
import { catchAsync } from '../utils/catchAsync';
import { verifyToken } from '../utils/jwt.utils';

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = catchAsync(async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in. Please log in to get access.', 401));
  }

  // Verify token
  const decoded: any = verifyToken(token, process.env.JWT_SECRET!);

  // Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('The user belonging to this token no longer exists.', 401));
  }

  // Grant access to protected route
  req.user = currentUser;
  next();
});

export const restrictTo = (...roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }
    next();
  };
};
