import express, { json } from 'express';
import connectDB from './config/db.js';
import urlRoutes from './routes/url.js';

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(json());

// Define Routes
app.use('/api/url', urlRoutes);

const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
