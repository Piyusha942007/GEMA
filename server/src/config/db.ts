import mongoose from 'mongoose';

let isInMemory = false;
let isInitialized = false;

// Local in-memory array fallback
export const localEnquiries: any[] = [];

/**
 * Attempts to connect to MongoDB using the MONGODB_URI env var.
 * If absent or fails, falls back gracefully to in-memory mode.
 */
export async function connectDB(): Promise<{ isInMemory: boolean }> {
  // If we are already connected to MongoDB, return connected state
  if (mongoose.connection.readyState === 1) {
    isInMemory = false;
    isInitialized = true;
    return { isInMemory };
  }

  // If already initialized as in-memory fallback, return early to avoid repeating logs/connection attempts
  if (isInitialized && isInMemory) {
    return { isInMemory };
  }

  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    if (!isInitialized) {
      console.warn('\n================================================================');
      console.warn('⚠️  WARNING: MONGODB_URI environment variable is not defined!');
      console.warn('⚠️  Graceful Fallback: Storing enquiries in-memory.');
      console.warn('================================================================\n');
    }
    isInMemory = true;
    isInitialized = true;
    return { isInMemory };
  }

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`\n✅ MongoDB Connected: ${conn.connection.host}\n`);
    isInMemory = false;
    isInitialized = true;
    return { isInMemory };
  } catch (error) {
    if (!isInitialized) {
      console.error(`\n❌ MongoDB Connection Failed: ${(error as Error).message}`);
      console.warn('⚠️  Graceful Fallback: Storing enquiries in-memory.');
    }
    isInMemory = true;
    isInitialized = true;
    return { isInMemory };
  }
}

/**
 * Returns connection state status for health-checks
 */
export function checkDBStatus(): { connected: boolean; isInMemory: boolean } {
  return {
    connected: !isInMemory && mongoose.connection.readyState === 1,
    isInMemory,
  };
}
