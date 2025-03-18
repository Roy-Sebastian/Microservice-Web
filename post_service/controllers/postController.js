// filepath: post_service/controllers/postController.js
import db from '../models/index.js';

class PostController {
  async createPost(req, res) {
    const { user_id, title, content, image } = req.body;
    try {
      const post = await db.Post.create({ user_id, title, content, image });
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await db.Post.findAll();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ message: 'Error fetching posts' });
    }
  }

  async getPostById(req, res) {
    const { id } = req.params;
    try {
      const post = await db.Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ message: 'Error fetching post' });
    }
  }

  async updatePost(req, res) {
    const { id } = req.params;
    const { content, image, title } = req.body;
    try {
      const post = await db.Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      post.content = content;
      post.image = image;
      post.title = title;
      await post.save();
      res.json(post);
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async deletePost(req, res) {
    const { id } = req.params;
    try {
      const post = await db.Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      await post.destroy();
      res.json({ message: 'Post deleted' });
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ message: error.message });
    }
  }
}

export default new PostController();