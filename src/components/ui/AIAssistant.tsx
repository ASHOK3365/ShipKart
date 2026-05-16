'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, Sparkles, Bot, 
  User, BrainCircuit, Mic, 
  MessageCircle, Zap, Shield,
  Plus, ShoppingCart, Info, CheckCircle2
} from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useAI } from '@/hooks/useAI';
import styles from './AIAssistant.module.css';
import SafeImage from './SafeImage';
import { products } from '@/data/products';

interface AIMessage {
  id: number;
  sender: 'user' | 'ai';
  text?: string;
  data?: {
    intent?: string;
    message?: string;
    recommendations?: any[];
    recipe?: { title: string; items: string[] };
    comparison?: { title: string; headers: string[]; rows: string[][] };
    suggestions?: string[];
  };
}

const AIAssistant = () => {
  const { items, addItem } = useCartStore();
  const { getAIResponse, loading: aiLoading } = useAI();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    { 
      id: 1, 
      sender: 'ai', 
      data: {
        message: "Hello! I am AXOR, your Smart Shopping Assistant. How can I help you find products or plan recipes today?",
        suggestions: ["Best budget phones", "Maggi recipe items", "Compare headphones"]
      }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, aiLoading]);

  const handleSend = async (textOverride?: string) => {
    const text = textOverride || inputValue;
    if (!text.trim()) return;

    const userMessage: AIMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    const aiData = await getAIResponse(text, { cart: items.map(i => i.name) });
    
    const aiResponse: AIMessage = { 
      id: Date.now() + 1, 
      sender: 'ai',
      data: aiData || { message: "I encountered a neural drift. Please try again." }
    };
    
    setMessages(prev => [...prev, aiResponse]);
  };

  const renderProductCard = (product: any) => (
    <div key={product.id} className={styles.productRecCard}>
      <div className={styles.recImg}>
        <SafeImage src={product.image} alt={product.name} fill style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.recInfo}>
        <h4>{product.name}</h4>
        <div className={styles.recMeta}>
          <span className={styles.recPrice}>₹{product.price.toLocaleString()}</span>
          <span className={styles.recRating}>★ {product.rating}</span>
        </div>
        <button 
          className={styles.recAddBtn}
          onClick={() => {
            addItem(product);
          }}
        >
          <Plus size={14} /> Add to Cart
        </button>
      </div>
    </div>
  );

  const handleAddAllToCart = (recipe: any) => {
    // Attempt to find matching products from our catalog
    const productsToAdd = recipe.items.map((itemName: string) => {
      // Basic fuzzy match across all products
      return products.find(p => p.name.toLowerCase().includes(itemName.toLowerCase()));
    }).filter(Boolean);

    productsToAdd.forEach((p: any) => addItem(p));
    // Provide feedback
    alert(`Added ${productsToAdd.length} items to your cart!`);
  };

  const renderRecipeCard = (recipe: any) => (
    <div className={styles.recipeCard}>
      <div className={styles.recipeHeader}>
        <Sparkles size={16} className={styles.recipeIcon} />
        <h4>{recipe.title} Essentials</h4>
      </div>
      <ul className={styles.recipeList}>
        {recipe.items.map((item: string, idx: number) => (
          <li key={idx}><CheckCircle2 size={14} className={styles.itemCheck} /> {item}</li>
        ))}
      </ul>
      <button 
        className={styles.recipeAddAll}
        onClick={() => handleAddAllToCart(recipe)}
      >
        Add All to Cart
      </button>
    </div>
  );

  const renderComparison = (comp: any) => (
    <div className={styles.comparisonCard}>
      <h4>{comp.title}</h4>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              {comp.headers.map((h: string, i: number) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {comp.rows.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
      <motion.button
        className={styles.floatingBtn}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className={styles.orbWrapper}>
          <div className={styles.orbPulse}></div>
          <div className={styles.orbCore}>
            <BrainCircuit className={styles.orbIcon} size={24} />
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.panelHeader}>
              <div className={styles.aiInfo}>
                <div className={styles.aiAvatar}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3>AXOR AI</h3>
                  <div className={styles.statusRow}>
                    <div className={styles.pulseDot}></div>
                    <span>Shopping Assistant Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.chatBody}>
              {messages.map((msg) => (
                <div key={msg.id} className={`${styles.messageWrapper} ${msg.sender === 'user' ? styles.userMsg : styles.aiMsg}`}>
                  {msg.sender === 'ai' && <Bot size={14} className={styles.msgIcon} />}
                  <div className={styles.messageContent}>
                    {msg.sender === 'user' ? (
                      <div className={styles.messageBubble}>{msg.text}</div>
                    ) : (
                      <>
                        {msg.data?.message && <div className={styles.messageBubble}>{msg.data.message}</div>}
                        
                        {msg.data?.recommendations && msg.data.recommendations.length > 0 && (
                          <div className={styles.recommendationsGrid}>
                            {msg.data.recommendations.map(renderProductCard)}
                          </div>
                        )}

                        {msg.data?.recipe && renderRecipeCard(msg.data.recipe)}
                        
                        {msg.data?.comparison && renderComparison(msg.data.comparison)}
                      </>
                    )}
                  </div>
                  {msg.sender === 'user' && <User size={14} className={styles.msgIcon} />}
                </div>
              ))}
              {aiLoading && (
                <div className={styles.aiMsg}>
                  <div className={styles.typingIndicator}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className={styles.panelFooter}>
              <div className={styles.suggestions}>
                {(messages[messages.length - 1]?.data?.suggestions || ["Maggi ingredients", "Best budget phones", "Compare headsets"]).map((s, i) => (
                  <button key={i} onClick={() => handleSend(s)}>{s}</button>
                ))}
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Ask AXOR something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <div className={styles.inputActions}>
                  <button className={styles.sendBtn} onClick={() => handleSend()}>
                    <Zap size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
