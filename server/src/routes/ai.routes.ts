import { Router } from 'express';
import { getAIAssistantResponse, getProductSummary } from '../controllers/ai.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Public for now to showcase AI power
router.post('/assistant', getAIAssistantResponse);
router.post('/summary', getProductSummary);

export default router;
