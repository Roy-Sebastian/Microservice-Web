import express from 'express';
import bodyParser from 'body-parser';
import setRoutes from '../routes/index.js';
import dotenv from 'dotenv';
import { authenticateToken } from '../middleware/authMiddleware.js';


dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for authentication
app.use(authenticateToken);

// Set up routes
setRoutes(app);

// Remove the app.listen part from here - it's now only in server.js

app.listen(port, () => {
  console.log(`Post service is running on port ${port}`);
});

export default app;