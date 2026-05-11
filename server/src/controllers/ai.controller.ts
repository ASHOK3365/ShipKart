import { Request, Response, NextFunction } from 'express';
import { AIService } from '../services/ai.service';
import { catchAsync } from '../utils/catchAsync';

export const getAIAssistantResponse = catchAsync(async (req: Request, res: Response) => {
  const { query, context } = req.body;
  
  if (!query) {
    return res.status(400).json({ success: false, message: 'Query is required' });
  }

  const response = await AIService.getShoppingAssistantResponse(query, context);

  res.status(200).json({
    success: true,
    data: response
  });
});

export const getProductSummary = catchAsync(async (req: Request, res: Response) => {
  const { product } = req.body;
  const summary = await AIService.getProductSummary(product);
  
  res.status(200).json({
    success: true,
    data: summary
  });
});
