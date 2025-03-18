import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';
import User from '../models/user.js';

class AuthController {
  async register(req, res) {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword });
      res.status(201).json({ message: 'User registered', user });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await db.User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  }
}

export default new AuthController();