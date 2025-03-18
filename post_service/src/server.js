import app from './app.js';
import dotenv from 'dotenv';
import db from '../models/index.js';

dotenv.config();

const port = process.env.PORT || 4000;

await db.init();

app.listen(port, () => {
  console.log(`Post service is running on port ${port}`);
});