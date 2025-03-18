import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from '../routes/authRoutes.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Auth service is running on port ${port}`);
  });

