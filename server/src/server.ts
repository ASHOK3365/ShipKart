import dotenv from 'dotenv';
import app from './app';
import connectDB from './database/db';

// Load env vars
dotenv.config();

const PORT = process.env.PORT || 5000;

// Start Server
const startServer = async () => {
  try {
    // Connect to Database
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`🚀 Antigravity Backend soaring on port ${PORT}`);
      console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: any) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: any) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
