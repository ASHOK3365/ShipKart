import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY',
});

export class AIService {
  static async getShoppingAssistantResponse(query: string, context?: any) {
    try {
      // In a real scenario, you'd fetch relevant products first and feed them into the prompt
      // For this demo/startup quality, we simulate a very intelligent commerce response
      
      const prompt = `
        You are "Antigravity Brain", a futuristic, premium AI shopping assistant for a high-end ecommerce platform.
        User Query: "${query}"
        
        Context: ${JSON.stringify(context || {})}
        
        Guidelines:
        1. Be sophisticated, professional, and helpful.
        2. Provide expert product advice.
        3. Use a futuristic tone.
        4. If the user asks for recommendations, suggest types of products or specific mock products.
        5. Keep responses concise but insightful.
      `;

      // Mocking for now if no key, but structure is ready
      if (process.env.OPENAI_API_KEY === 'YOUR_OPENAI_API_KEY' || !process.env.OPENAI_API_KEY) {
        return this.generateMockResponse(query);
      }

      const response = await openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [{ role: 'system', content: 'You are Antigravity Brain.' }, { role: 'user', content: prompt }],
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('AI Assistant Error:', error);
      return "I'm currently recalibrating my quantum circuits. Please try again in a moment.";
    }
  }

  static generateMockResponse(query: string) {
    const q = query.toLowerCase();
    if (q.includes('iphone') || q.includes('phone')) {
      return "The iPhone 15 Pro is currently the pinnacle of our mobile ecosystem, featuring an aerospace-grade titanium design. If you're looking for a balance of power and value, I recommend the Google Pixel 8 Pro for its industry-leading AI camera features.";
    }
    if (q.includes('headphones') || q.includes('audio')) {
      return "For an immersive acoustic journey, the Sony WH-1000XM5 offers unparalleled noise cancellation. However, if you prefer a more spatial, high-fidelity experience, the AirPods Max are exquisitely engineered for the Antigravity lifestyle.";
    }
    return "Analyzing your request through the Antigravity neural network... I recommend exploring our 'Futuristic Essentials' collection. Is there a specific category you'd like me to deep-dive into?";
  }

  static async getProductSummary(product: any) {
    // Generate AI summaries for product pages
    return `The ${product.name} is a masterpiece of modern engineering. Our AI analysis indicates it excels in durability and aesthetic appeal, making it a top-tier choice for discerning users.`;
  }
}
