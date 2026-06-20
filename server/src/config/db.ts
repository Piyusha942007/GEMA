import mongoose from 'mongoose';

let isInMemory = false;

// Local in-memory array fallback
export const localEnquiries: any[] = [];

/**
 * Attempts to connect to MongoDB using the MONGODB_URI env var.
 * If absent or fails, falls back gracefully to in-memory mode.
 */
export async function connectDB(): Promise<{ isInMemory: boolean }> {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.warn('\n================================================================');
    console.warn('⚠️  WARNING: MONGODB_URI environment variable is not defined!');
    console.warn('⚠️  Graceful Fallback: Storing enquiries in-memory.');
    console.warn('================================================================\n');
    isInMemory = true;
    return { isInMemory };
  }

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`\n✅ MongoDB Connected: ${conn.connection.host}\n`);
    isInMemory = false;
    return { isInMemory };
  } catch (error) {
    console.error(`\n❌ MongoDB Connection Failed: ${(error as Error).message}`);
    console.warn('⚠️  Graceful Fallback: Storing enquiries in-memory.');
    isInMemory = true;
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
