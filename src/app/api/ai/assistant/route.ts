import { NextResponse } from 'next/server';
import { products } from '@/data/products';

const GEMINI_API_KEY = 'AIzaSyCrUpyLsF5DF8Zaseof6Zeb_BamgqIpa7c';

export async function POST(req: Request) {
  try {
    const { query, context } = await req.json();

    // Prepare a compact catalog for the AI
    const catalog = products.map(p => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      category: p.category,
      subCategory: p.subCategory,
      price: p.price,
      rating: p.rating,
      image: p.image
    }));

    const systemPrompt = `You are AXOR AI, a highly advanced, premium Smart Shopping Assistant for Shipkart Commerce OS.
Your goal is to be helpful, concise, and actionable.

INTENT DETECTION:
- Recipe Intent: User asks for recipe ingredients (e.g., "biryani recipe").
- Budget Intent: User has a price limit (e.g., "phone under 20k").
- Comparison Intent: User wants to compare products.
- Shopping Intent: General product search.
- Gift Intent: Looking for gifts.

CATALOG KNOWLEDGE:
Available Products: ${JSON.stringify(catalog.slice(0, 100))}

RESPONSE FORMAT:
You MUST respond in valid JSON format ONLY. No markdown, no extra text.
JSON Structure:
{
  "intent": "recipe | budget | comparison | shopping | gift | general",
  "message": "A friendly, expert shopping response.",
  "recommendations": [ { "id": "p-id", "name": "Name", "price": 100, "rating": 4.5, "image": "url" } ],
  "recipe": { "title": "Recipe Name", "items": ["Product Name 1", "Product Name 2"] },
  "comparison": { 
    "title": "Comparison", 
    "headers": ["Feature", "Item 1", "Item 2"], 
    "rows": [["Price", "₹100", "₹200"]] 
  },
  "suggestions": ["Suggestion Chip 1", "Suggestion Chip 2"]
}

RULES:
- Only recommend products that exist in the catalog provided.
- If a recipe is requested, list the items and find matching products from the catalog if possible.
- For comparison, create a table-like structure in the "comparison" field.
- For budget, filter by price.
- Never mention "system initialized" or "re-synchronize". Be human and premium.

User query: ${query}
Current Cart: ${JSON.stringify(context.cart)}
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-live-preview:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: systemPrompt }]
        }]
      })
    });

    const data = await response.json();
    
    let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    
    // Clean up potential markdown wrapping if AI ignores the "JSON ONLY" rule
    aiText = aiText.replace(/```json/g, '').replace(/```/g, '').trim();

    try {
      const parsedData = JSON.parse(aiText);
      return NextResponse.json({ success: true, data: parsedData });
    } catch (parseError) {
      console.error('AI JSON Parse Error:', parseError, aiText);
      return NextResponse.json({ 
        success: true, 
        data: { 
          intent: 'general', 
          message: aiText || "I'm processing your request. How can I help you find products today?",
          suggestions: ["Best budget phones", "Recipe items", "Gift ideas"]
        } 
      });
    }

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
