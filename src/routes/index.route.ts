import express, { Router } from 'express';
const router = Router();
import authRouter from './auth.route.js';

router.use('/',authRouter)
export default router;
