import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import enquiryRoutes from './routes/enquiryRoutes';
import { connectDB } from './config/db';

dotenv.config();

const app = express();

// Secure Express headers
app.use(helmet());

// Configure CORS
// We allow all origins to prevent Vercel edge proxies from causing false CORS rejections.
// Spam is already protected by the express-rate-limit middleware.
app.use(cors());

// Middleware to ensure DB connection is initialized (essential for serverless Vercel function entrypoints)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Error initializing database connection:', error);
    next(); // Fallback anyway to avoid blocking requests if DB fails
  }
});

// JSON body parser
app.use(express.json());

// Anti-spam rate limiting for submissions (15 attempts per 15 minutes per IP)
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    success: false,
    message: 'Too many registration attempts, please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/enquiry', enquiryLimiter);

// Mount API router
app.use('/api', enquiryRoutes);

// Fallback 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

export default app;
