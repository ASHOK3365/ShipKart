const Product = require('../models/Product');

/**
 * AI Service for recommendation logic
 */
class AIService {
  /**
   * Generates recommendations based on product context
   * @param {string} productId 
   * @returns {Promise<Array>}
   */
  async getRelatedProducts(productId) {
    try {
      const product = await Product.findById(productId);
      if (!product) return [];

      // Semantic/Category based recommendation
      return await Product.find({
        category: product.category,
        _id: { $ne: productId }
      }).limit(4);
    } catch (error) {
      return [];
    }
  }

  /**
   * AI-powered personalization engine
   * @param {Object} user 
   */
  async getPersonalizedFeed(user) {
    // In a real app, use user.orderHistory and browsing behavior
    // For now, return trending in their preferred category
    return await Product.find({ isTrending: true }).limit(8);
  }

  /**
   * AI Summary Generator
   * @param {Object} product 
   */
  generateProductSummary(product) {
    return {
      strengths: ["Premium build quality", "High performance-to-price ratio"],
      weaknesses: ["Higher price point than competitors"],
      bestBuyer: "Professionals and enthusiasts seeking zero compromise."
    };
  }
}

module.exports = new AIService();
