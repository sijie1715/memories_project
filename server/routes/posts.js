import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// reached by localhost:5000/posts
// because prefix posts is added in index.js
router.get('/', getPosts);
router.post('/', createPost);

export default router;