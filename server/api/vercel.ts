import express from 'express';
import { registerRoutes } from '../routes';

const app = express();

// Apply JSON middleware
app.use(express.json());

// Register all the API routes
registerRoutes(app);

export default app;