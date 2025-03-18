import express from 'express';
import postController from '../controllers/postController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new post
router.post('/', authenticateToken, postController.createPost.bind(postController));

// Get all posts
router.get('/', postController.getAllPosts.bind(postController));

// Get a post by ID
router.get('/:id', postController.getPostById.bind(postController));

// Update a post by ID
router.put('/:id', authenticateToken, postController.updatePost.bind(postController));

// Delete a post by ID
router.delete('/:id', authenticateToken, postController.deletePost.bind(postController));

export default router;