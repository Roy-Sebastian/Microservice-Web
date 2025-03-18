// filepath: post_service/routes/index.js
import express from 'express';
import postRoutes from './postRoutes.js';

const setRoutes = (app) => {
  const router = express.Router();

  router.use('/posts', postRoutes);

  app.use('/api', router);
};

export default setRoutes;