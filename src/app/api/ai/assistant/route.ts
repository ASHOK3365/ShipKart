import { NextResponse } from 'next/server';

const GEMINI_API_KEY = 'AIzaSyCrUpyLsF5DF8Zaseof6Zeb_BamgqIpa7c';

export async function POST(req: Request) {
  try {
    const { query, context } = await req.json();

    const systemPrompt = `You are AXOR AI, an advanced AI shopping assistant for Shipkart (a futuristic Commerce OS).
Keep your answers brief, professional, and helpful. Format your responses elegantly.
User query: ${query}
Context/Cart Items: ${JSON.stringify(context)}
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
    
    if (data.candidates && data.candidates[0].content.parts[0].text) {
      return NextResponse.json({ success: true, data: data.candidates[0].content.parts[0].text });
    } else {
      throw new Error('Failed to generate response');
    }

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
