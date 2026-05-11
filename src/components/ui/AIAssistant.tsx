'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, Sparkles, Bot, 
  User, BrainCircuit, Mic, 
  MessageCircle, Zap, Shield
} from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import styles from './AIAssistant.module.css';

const AIAssistant = () => {
  const { items } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Quantum systems initialized. I am Antigravity Brain. How can I augment your shopping experience today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/v1/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          query: inputValue,
          context: { cart: items.map(i => i.name) }
        })
      });

      const data = await response.json();
      
      const aiResponse = { 
        id: Date.now() + 1, 
        text: data.success ? data.data : "My neural link is currently fluctuating. Please re-synchronize.", 
        sender: 'ai' 
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now()+1, text: "Critical error in AI core. Please check your connectivity.", sender: 'ai' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating AI Orb */}
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

      {/* AI Panel */}
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
                  <h3>Antigravity Brain</h3>
                  <div className={styles.statusRow}>
                    <div className={styles.pulseDot}></div>
                    <span>Neural Link Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.chatBody}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${styles.messageWrapper} ${msg.sender === 'user' ? styles.userMsg : styles.aiMsg}`}
                >
                  {msg.sender === 'ai' && <Bot size={14} className={styles.msgIcon} />}
                  <div className={styles.messageBubble}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && <User size={14} className={styles.msgIcon} />}
                </motion.div>
              ))}
              {isTyping && (
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
                <button onClick={() => setInputValue("Best budget iPhone?")}>Best budget iPhone?</button>
                <button onClick={() => setInputValue("Compare Headphones")}>Compare Headphones</button>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Query Antigravity Brain..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <div className={styles.inputActions}>
                  <button className={styles.iconBtn} title="Voice Input"><Mic size={18} /></button>
                  <button onClick={handleSend} className={styles.sendBtn}>
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
