import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';

export const generateToken = (user: IUser) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRE || '1h' }
  );
};

export const generateRefreshToken = (user: IUser) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET!,
    { expiresIn: process.env.JWT_REFRESH_EXPIRE || '7d' }
  );
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};
