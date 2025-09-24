import { Router } from 'express';
import { createScan } from '../controllers/scanController.js';

const router = Router();

router.post('/scan', createScan);

export default router;