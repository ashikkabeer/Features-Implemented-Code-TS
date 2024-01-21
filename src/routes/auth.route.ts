import { Router } from 'express';
const router = Router();
import { login, verifyToken } from '../controllers/auth.controller.js'; // Fix: Correct the file path or install the missing module


router.post('/login', login);
router.post('/verify', verifyToken);

export default router