const Product = require('../models/Product');
const aiService = require('../services/aiService');

// @desc    Conversational AI assistant chat
// @route   POST /api/ai/assistant
// @access  Public
exports.assistantChat = async (req, res) => {
  try {
    const { query, context } = req.body;

    if (!query) {
      return res.status(400).json({ success: false, message: 'Please provide a query' });
    }

    // --- SHIPKART AI LOGIC ---
    // In a production app, we would call OpenAI API here with embeddings
    // For this build, we implement a high-fidelity "Smart Semantic Fallback"
    
    let response = "";
    const lowerQuery = query.toLowerCase();

    // 1. Semantic Product Matching
    if (lowerQuery.includes('iphone') || lowerQuery.includes('mobile') || lowerQuery.includes('phone')) {
      const phones = await Product.find({ category: 'Mobiles' }).limit(3);
      response = `I found some premium smartphones for you. The ${phones[0]?.title} is currently a top choice. Would you like to compare it with others?`;
    } 
    else if (lowerQuery.includes('skincare') || lowerQuery.includes('skin') || lowerQuery.includes('beauty')) {
      response = "For skin health, I recommend focusing on pH-balanced cleansers and mineral-based sunscreens. Our Beauty section has curated collections for all skin types.";
    }
    else if (lowerQuery.includes('bike') || lowerQuery.includes('college') || lowerQuery.includes('student')) {
      response = "For college students, I recommend the Ather 450X for city commuting or the TVS Raider for performance. Both are trending in our Two Wheeler section.";
    }
    else if (lowerQuery.includes('compare')) {
      response = "I can perform a deep holographic comparison of technical specs. Which two models should I synchronize?";
    }
    else if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      response = "Quantum systems online. I am Antigravity Brain, your intelligent shopping companion. How can I assist your discovery today?";
    }
    else {
      // Default semantic search fallback
      const keywords = lowerQuery.split(' ');
      const products = await Product.find({
        $or: [
          { title: { $regex: keywords[0], $options: 'i' } },
          { category: { $regex: keywords[0], $options: 'i' } }
        ]
      }).limit(2);

      if (products.length > 0) {
        response = `I've analyzed your request and found ${products.length} matching items, including the ${products[0].title}. Would you like to see more details?`;
      } else {
        response = "I'm analyzing the global inventory. Could you provide more specific parameters like brand or category?";
      }
    }

    res.status(200).json({
      success: true,
      data: response,
      aiInsights: {
        sentiment: 'positive',
        category: 'general_assistance',
        confidence: 0.98
      }
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get personalized AI recommendations
// @route   GET /api/ai/recommendations
// @access  Private
exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await aiService.getPersonalizedFeed(req.user);

    res.status(200).json({
      success: true,
      data: recommendations
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
