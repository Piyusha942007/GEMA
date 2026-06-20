import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

async function startServer() {
  // Perform database connection or fallback
  await connectDB();

  app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`🏥 Health check at: http://localhost:${PORT}/api/health`);
    console.log(`===================================================`);
  });
}

startServer();
