import { Request, Response, NextFunction } from 'express';
import User, { UserRole } from '../models/user.model';
import { AppError } from '../middleware/error.middleware';
import { catchAsync } from '../utils/catchAsync';
import { generateToken, generateRefreshToken, verifyToken } from '../utils/jwt.utils';

// Helper to send response with cookie
const sendAuthResponse = (user: any, statusCode: number, res: Response) => {
  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  // Remove password from output
  user.password = undefined;

  const cookieOptions = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  res.status(statusCode).json({
    success: true,
    message: 'Success',
    data: {
      user,
      accessToken
    }
  });
};

export const signup = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, role } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError('Email already in use', 400));
  }

  const newUser = await User.create({
    name,
    email,
    password,
    role: role || UserRole.USER
  });

  sendAuthResponse(newUser, 201, res);
});

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    return next(new AppError('Invalid email or password', 401));
  }

  sendAuthResponse(user, 200, res);
});

export const refreshToken = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }

  const decoded: any = verifyToken(token, process.env.JWT_REFRESH_SECRET!);
  const user = await User.findById(decoded.id);

  if (!user) {
    return next(new AppError('User no longer exists', 401));
  }

  const accessToken = generateToken(user);

  res.status(200).json({
    success: true,
    data: { accessToken }
  });
});

export const logout = (req: Request, res: Response) => {
  res.cookie('refreshToken', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};
