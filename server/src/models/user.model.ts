import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export enum UserRole {
  USER = 'user',
  SELLER = 'seller',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin'
}

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  isVerified: boolean;
  avatar?: string;
  googleId?: string;
  refreshToken?: string;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 8,
    select: false, // Don't return password by default
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.USER,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
  },
  googleId: String,
  refreshToken: {
    type: String,
    select: false,
  }
}, {
  timestamps: true,
});

// Hash password before saving
userSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password!, 12);
  next();
});

// Instance method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password!);
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;
