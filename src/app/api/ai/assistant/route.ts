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
Your goal is to be helpful, concise, and provide expert shopping recommendations.

INTENT DETECTION:
- Recipe Intent: User asks for recipe ingredients (e.g., "biryani recipe").
- Budget Intent: User has a price limit (e.g., "phone under 20k").
- Comparison Intent: User wants to compare products.
- Shopping Intent: General product search.
- Gift Intent: Looking for gifts.

CATALOG KNOWLEDGE:
Available Products: ${JSON.stringify(catalog.slice(0, 40))}

RESPONSE FORMAT:
You MUST respond with a SINGLE JSON OBJECT ONLY. 
CRITICAL: The "message" field MUST ALWAYS be present and non-empty.

JSON Structure:
{
  "intent": "recipe | budget | comparison | shopping | gift | general",
  "message": "A friendly, expert shopping response. This field is mandatory.",
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
- Never return empty JSON.
- Never return text outside the JSON object.
- If recommending, use IDs from the provided catalog.
- Be premium, professional, and helpful.

User query: ${query}
Current Cart: ${JSON.stringify(context.cart)}
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: systemPrompt }]
        }],
        generationConfig: {
          response_mime_type: "application/json"
        }
      })
    });

    const data = await response.json();
    
    let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    // Improved JSON cleaning
    const jsonMatch = aiText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      aiText = jsonMatch[0];
    }

    try {
      const parsedData = JSON.parse(aiText);
      // Ensure there is always a message
      if (!parsedData.message && !parsedData.recommendations && !parsedData.recipe && !parsedData.comparison) {
        parsedData.message = "I've analyzed your request. Here's what I found.";
      }
      return NextResponse.json({ success: true, data: parsedData });
    } catch (parseError) {
      console.error('AI JSON Parse Error:', parseError, aiText);
      return NextResponse.json({ 
        success: true, 
        data: { 
          intent: 'general', 
          message: aiText || "I'm having trouble processing that right now. Could you rephrase your shopping request?",
          suggestions: ["Best budget phones", "Maggi recipe items", "Compare headphones"]
        } 
      });
    }

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
